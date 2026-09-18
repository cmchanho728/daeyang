#!/usr/bin/env node
/**
 * daeyang-photos 폴더의 새 제품사진을 public/products의 해당 위치로 반영한다.
 *
 * - 대상은 "제품사진"(img / images[])만. 외관도(specImg / drawings[])는 교체 대상에서 제외한다.
 * - daeyang-photos 안의 원본 파일은 절대 수정/삭제하지 않는다(읽기 전용으로만 사용).
 * - 매칭은 "daeyang-photos 안의 상대 경로"와 "public/products 기준 경로"가 같은 파일만 인정한다.
 *   예: daeyang-photos/vc/valve/2way-80.jpg -> public/products/vc/valve/2way-80.jpg
 *   파일명만 같고 폴더가 다르면 매칭하지 않는다 (같은 파일명이 vc/valve, tl/valve 등 여러 폴더에 있을 수 있어서).
 * - 확장자는 .jpg/.jpeg/.png를 서로 다르게 써도 매칭하고(예: 대상이 .jpg여도 원본이 .png면 매칭), 대소문자도 구분하지 않는다.
 * - 매칭된 파일은 흰 배경 정사각형 캔버스 가운데에 합성한 뒤 압축해서 저장한다. 원본에 알파 채널이
 *   있는지(투명 배경 원본인지)에 따라 두 가지 방식으로 처리한다.
 *   - 불투명 원본: 1200x1200 캔버스, 제품이 캔버스의 약 80%(960px)를 차지하도록 리사이즈, 품질 90.
 *   - 투명 배경(RGBA) 원본: 알파 채널 기준으로 제품 테두리를 찾아 잘라낸 뒤, 제품 긴 변이 캔버스의
 *     86%가 되도록 흰 배경 1200x1200 캔버스 가운데에 배치한다. 단, 제품 긴 변이 1032px(1200의 86%)
 *     보다 작으면 확대하지 않고, 캔버스 쪽을 제품 크기에 맞춰 줄인다(긴 변 / 0.86). JPG 품질 85로 저장.
 *     제품이 가로로 아주 길쭉해(약 3:1 이상) 86% 규칙대로면 유난히 작아 보이는 경우, 아래
 *     TRANSPARENT_SCALE_OVERRIDES 표에 등록해 그 제품만 다른 배율을 쓸 수 있다.
 * - 매 실행마다 목록표의 제품사진 교체대상 경로에 맞춰 daeyang-photos 안에 빈 폴더를 미리 만들어 둔다
 *   (교체대상이 없는 폴더는 만들지 않는다).
 *
 * 사용법:
 *   node scripts/replace-photos.mjs            # 바뀔 파일 목록만 보여주고 확인을 물음
 *   node scripts/replace-photos.mjs --dry-run  # 목록만 보여주고 종료 (미반영)
 *   node scripts/replace-photos.mjs --yes      # 확인 프롬프트 없이 바로 반영 (자동화용)
 */

import { existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const publicDir = path.join(root, "public");
const dataDir = path.join(root, "src/data/products");
const sourceDir = "G:/Claude/projects/daeyang-photos";

const CANVAS_SIZE = 1200;
const PRODUCT_SCALE = 0.8; // 불투명 원본: 제품이 캔버스의 약 80%를 차지
const TRANSPARENT_PRODUCT_SCALE = 0.86; // 투명 배경 원본: 제품 긴 변이 캔버스의 86%
const TRIM_ALPHA_THRESHOLD = 10;
const JPEG_QUALITY_OPAQUE = 90;
const JPEG_QUALITY_TRANSPARENT = 85;

/** 특정 제품사진만 기본 86% 대신 다른 배율을 적용하고 싶을 때 쓰는 예외 표.
 *  키는 matchKey() 형식(폴더/파일명, 확장자 제외). 원본이 가로로 아주 길쭉한(약 3:1)
 *  제품이라 기본 규칙을 적용하면 짧은 변이 지나치게 작아져 다른 사진보다 왜소해 보이는
 *  경우에만 예외를 둔다. */
const TRANSPARENT_SCALE_OVERRIDES = new Map([
  ["vc/valve/check", 0.95],
  ["vc/valve/safety", 0.95],
  ["tl/etc/bottom-handle", 0.95],
]);

const PRODUCTS_PREFIX = "products/";
const ALLOWED_EXTS = new Set([".jpg", ".jpeg", ".png"]);

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const skipConfirm = args.includes("--yes");

const DATA_FILES = [
  "pump-fuel.ts",
  "pump-vacuum.ts",
  "valve-fuel.ts",
  "valve-vacuum.ts",
  "etc-coupling.ts",
  "etc-flange.ts",
  "etc-fuel.ts",
  "etc-gasket.ts",
  "etc-hose.ts",
  "etc-joint.ts",
  "etc-vacuum.ts",
];

/** src/data/products/*.ts 를 정규식으로 훑어서 "제품사진"(img, images[])과
 *  "외관도"(specImg, drawings[]) 참조를 각각 추려낸다. 외관도 쪽은 교체 대상은 아니지만,
 *  제품사진과 같은 파일을 참조하는 경우를 찾아 경고하는 데 쓰인다. TS를 직접 실행하지 않고
 *  텍스트로만 읽어서, 이 스크립트가 astro/zod 등 프로젝트 런타임에 의존하지 않게 한다. */
function collectTargets() {
  const photoTargets = [];
  const drawingTargets = [];

  for (const file of DATA_FILES) {
    const filePath = path.join(dataDir, file);
    if (!existsSync(filePath)) continue;
    const content = readFileSync(filePath, "utf8");
    const lines = content.split("\n");

    let currentId = null;
    let currentName = null;
    let inImages = false;
    let inDrawings = false;

    for (const line of lines) {
      const idMatch = line.match(/^\s*id:\s*"([^"]+)"/);
      if (idMatch) {
        currentId = idMatch[1];
        inImages = false;
        inDrawings = false;
      }

      const nameMatch = line.match(/^\s*name:\s*"([^"]+)"/);
      if (nameMatch) currentName = nameMatch[1];

      if (/^\s*images:\s*\[/.test(line)) inImages = true;
      if (/^\s*drawings:\s*\[/.test(line)) inDrawings = true;
      if ((inImages || inDrawings) && /^\s*\],?\s*$/.test(line)) {
        inImages = false;
        inDrawings = false;
      }

      const imgMatch = line.match(/^\s*img:\s*`\$\{baseUrl\}([^`]+)`/);
      if (imgMatch) {
        photoTargets.push({ file, category: categoryOf(file), id: currentId, name: currentName, field: "img", relPath: imgMatch[1] });
      }

      const specMatch = line.match(/^\s*specImg:\s*`\$\{baseUrl\}([^`]+)`/);
      if (specMatch) {
        drawingTargets.push({ file, category: categoryOf(file), id: currentId, name: currentName, field: "specImg", relPath: specMatch[1] });
      }

      const srcMatch = line.match(/^\s*src:\s*`\$\{baseUrl\}([^`]+)`/);
      if (srcMatch && inImages && !inDrawings) {
        photoTargets.push({ file, category: categoryOf(file), id: currentId, name: currentName, field: "images[]", relPath: srcMatch[1] });
      }
      if (srcMatch && inDrawings && !inImages) {
        drawingTargets.push({ file, category: categoryOf(file), id: currentId, name: currentName, field: "drawings[]", relPath: srcMatch[1] });
      }
    }
  }

  return { photoTargets, drawingTargets };
}

function categoryOf(file) {
  return file.replace(/\.ts$/, "");
}

/** relPath(예: "products/vc/valve/2way-80.jpg" 또는 "products-tltruck.jpg")를
 *  public/products 기준 상대 경로로 정규화하고 확장자를 뗀 매칭 키를 만든다.
 *  "products/" 밑이 아닌 파일(공용 배너 등)은 파일명 그대로를 키로 쓴다. */
function matchKey(relPath) {
  const normalized = relPath.replace(/\\/g, "/");
  const withoutPrefix = normalized.startsWith(PRODUCTS_PREFIX) ? normalized.slice(PRODUCTS_PREFIX.length) : normalized;
  const ext = path.extname(withoutPrefix);
  return withoutPrefix.slice(0, withoutPrefix.length - ext.length).toLowerCase();
}

/** relPath에 대응하는, daeyang-photos 안에 미리 만들어 둘 폴더(sourceDir 기준 상대 경로).
 *  "products/" 밑이 아닌 파일은 폴더가 필요 없으므로 null. */
function folderFor(relPath) {
  const normalized = relPath.replace(/\\/g, "/");
  if (!normalized.startsWith(PRODUCTS_PREFIX)) return null;
  const withoutPrefix = normalized.slice(PRODUCTS_PREFIX.length);
  const dir = path.dirname(withoutPrefix);
  return dir === "." ? null : dir;
}

function walk(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
}

/** daeyang-photos 안의 이미지 파일(.jpg/.jpeg/.png)을 매칭 키 기준으로 색인한다. */
function buildSourceIndex() {
  const files = [];
  walk(sourceDir, files);

  const imageFiles = files.filter((f) => ALLOWED_EXTS.has(path.extname(f).toLowerCase()));

  const byKey = new Map();
  for (const f of imageFiles) {
    const rel = path.relative(sourceDir, f).replace(/\\/g, "/");
    const key = matchKey(rel);
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(f);
  }

  return { byKey, imageFiles };
}

/** 제품사진 교체대상 폴더 구조를 daeyang-photos 안에 빈 폴더로 미리 만든다.
 *  교체대상이 있는 폴더만 만들고, 이미 있는 폴더는 건드리지 않는다. */
function ensureSourceFolders(photoTargets) {
  const dirs = new Set();
  for (const t of photoTargets) {
    const dir = folderFor(t.relPath);
    if (dir) dirs.add(dir);
  }

  const created = [];
  for (const dir of dirs) {
    const full = path.join(sourceDir, dir);
    if (!existsSync(full)) {
      mkdirSync(full, { recursive: true });
      created.push(dir);
    }
  }

  return created;
}

/** 불투명 원본: 1200x1200 캔버스, 제품이 캔버스의 약 80%(960px)를 차지하도록 리사이즈. */
async function processOpaqueImage(sourcePath, destExt) {
  const inner = Math.round(CANVAS_SIZE * PRODUCT_SCALE);

  const resized = await sharp(sourcePath)
    .resize(inner, inner, { fit: "inside", withoutEnlargement: false })
    .toBuffer();

  const meta = await sharp(resized).metadata();
  const left = Math.round((CANVAS_SIZE - (meta.width ?? inner)) / 2);
  const top = Math.round((CANVAS_SIZE - (meta.height ?? inner)) / 2);

  const canvas = sharp({
    create: {
      width: CANVAS_SIZE,
      height: CANVAS_SIZE,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  }).composite([{ input: resized, left, top }]);

  const buffer =
    destExt === ".png"
      ? await canvas.png({ quality: 90 }).toBuffer()
      : await canvas.jpeg({ quality: JPEG_QUALITY_OPAQUE, mozjpeg: true }).toBuffer();

  return { mode: "opaque", cropSize: "-", outputSize: `${CANVAS_SIZE}x${CANVAS_SIZE}`, buffer };
}

/** 투명 배경(RGBA) 원본: 알파 채널 기준으로 제품 테두리를 찾아 잘라낸 뒤, 제품 긴 변이 캔버스의
 *  86%가 되도록 흰 배경 캔버스 가운데에 배치한다. 제품 긴 변이 1032px보다 작으면 확대하지 않고
 *  캔버스 쪽을 제품 크기에 맞춰 줄인다. 항상 JPG로 저장한다. */
async function processTransparentImage(sourcePath, scale = TRANSPARENT_PRODUCT_SCALE) {
  const { data: trimmed, info } = await sharp(sourcePath)
    .trim({ threshold: TRIM_ALPHA_THRESHOLD })
    .toBuffer({ resolveWithObject: true });

  const cropWidth = info.width;
  const cropHeight = info.height;
  const longSide = Math.max(cropWidth, cropHeight);
  const minInner = Math.round(CANVAS_SIZE * scale);

  let canvasSize;
  let resizeTarget;
  if (longSide >= minInner) {
    canvasSize = CANVAS_SIZE;
    resizeTarget = minInner;
  } else {
    canvasSize = Math.round(longSide / scale);
    resizeTarget = longSide; // 확대하지 않음(withoutEnlargement)
  }

  const productBuffer = await sharp(trimmed)
    .resize(resizeTarget, resizeTarget, { fit: "inside", withoutEnlargement: true })
    .flatten({ background: { r: 255, g: 255, b: 255 } }) // 알파를 흰 배경에 합성
    .toBuffer();

  const productMeta = await sharp(productBuffer).metadata();
  const left = Math.round((canvasSize - (productMeta.width ?? resizeTarget)) / 2);
  const top = Math.round((canvasSize - (productMeta.height ?? resizeTarget)) / 2);

  const buffer = await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: productBuffer, left, top }])
    .jpeg({ quality: JPEG_QUALITY_TRANSPARENT, mozjpeg: true })
    .toBuffer();

  return {
    mode: "transparent",
    cropSize: `${cropWidth}x${cropHeight}`,
    outputSize: `${canvasSize}x${canvasSize}`,
    buffer,
  };
}

/** 원본에 알파 채널이 있으면 투명 배경 처리, 없으면 기존 불투명 처리 방식을 적용한다. */
async function processImage(sourcePath, destPath, scale) {
  const meta = await sharp(sourcePath).metadata();
  const destExt = path.extname(destPath).toLowerCase();
  const result = meta.hasAlpha
    ? await processTransparentImage(sourcePath, scale)
    : await processOpaqueImage(sourcePath, destExt);
  return { ...result, sourceSize: `${meta.width}x${meta.height}` };
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (answer) => { rl.close(); resolve(answer); }));
}

async function main() {
  if (!existsSync(sourceDir)) {
    console.error(`[replace-photos] 원본 사진 폴더를 찾을 수 없습니다: ${sourceDir}`);
    process.exit(1);
  }

  const { photoTargets, drawingTargets } = collectTargets();

  const createdFolders = ensureSourceFolders(photoTargets);
  if (createdFolders.length > 0) {
    console.log(`[replace-photos] daeyang-photos에 빈 폴더 ${createdFolders.length}개 생성:`);
    for (const dir of createdFolders.sort()) {
      console.log(`  - ${dir}`);
    }
  }

  // 제품사진과 외관도가 같은 파일을 참조하는 경우를 경고 (예: valve-vc-check.jpg, airclean.jpg)
  const drawingRelPaths = new Set(drawingTargets.map((d) => d.relPath));
  const sharedPhotoTargets = photoTargets.filter((t) => drawingRelPaths.has(t.relPath));
  if (sharedPhotoTargets.length > 0) {
    console.warn(`\n[replace-photos] 경고: 제품사진과 외관도가 같은 파일을 참조하는 항목 ${sharedPhotoTargets.length}건 (데이터에서 외관도 쪽 참조를 제거하는 것을 권장):`);
    for (const t of sharedPhotoTargets) {
      console.warn(`  - [${t.category}] ${t.name}(${t.id}): ${t.relPath}`);
    }
  }

  const { byKey: sourceIndex, imageFiles } = buildSourceIndex();

  const plan = [];
  const ambiguous = [];
  const noSource = [];

  const seenTargets = new Set();
  const targetKeys = new Set();
  for (const t of photoTargets) {
    if (seenTargets.has(t.relPath)) continue; // 같은 파일이 여러 필드에서 참조되는 경우 한 번만 처리
    seenTargets.add(t.relPath);
    targetKeys.add(matchKey(t.relPath));

    const key = matchKey(t.relPath);
    const matches = sourceIndex.get(key) ?? [];

    if (matches.length === 0) {
      noSource.push(t);
    } else if (matches.length > 1) {
      ambiguous.push({ ...t, matches });
    } else {
      plan.push({ ...t, source: matches[0], dest: path.join(publicDir, t.relPath) });
    }
  }

  console.log(`\n[replace-photos] 대상(제품사진) 참조 총 ${seenTargets.size}개, daeyang-photos에서 매칭된 파일 ${plan.length}개`);

  if (plan.length > 0) {
    for (const p of plan) {
      const scale = TRANSPARENT_SCALE_OVERRIDES.get(matchKey(p.relPath));
      p.result = await processImage(p.source, p.dest, scale);
    }

    console.log("\n반영될 파일:");
    console.log(
      "  | 제품 | 원본 -> 대상 | 방식 | 원본 크기 | 잘라낸 제품 크기 | 최종 출력 크기 | 용량 |",
    );
    for (const p of plan) {
      const r = p.result;
      console.log(
        `  | [${p.category}] ${p.name}(${p.id}) | ${path.relative(sourceDir, p.source)} -> public/${p.relPath} | ${r.mode} | ${r.sourceSize} | ${r.cropSize} | ${r.outputSize} | ${formatBytes(r.buffer.length)} |`,
      );
    }
  }

  if (ambiguous.length > 0) {
    console.log("\n같은 경로에 확장자만 다른 파일이 daeyang-photos에 여러 개 있어 건너뜀 (직접 확인 필요):");
    for (const a of ambiguous) {
      console.log(`  - ${a.relPath}: ${a.matches.map((m) => path.relative(sourceDir, m)).join(", ")}`);
    }
  }

  if (noSource.length > 0) {
    console.log(`\ndaeyang-photos에서 못 찾은 대상 ${noSource.length}개 (아직 준비 안 된 사진, 건너뜀)`);
  }

  // 목록표 경로와 매칭되지 않는 daeyang-photos 안의 파일 (파일명 오타 등을 잡는 용도)
  const unmatched = imageFiles.filter((f) => {
    const rel = path.relative(sourceDir, f).replace(/\\/g, "/");
    return !targetKeys.has(matchKey(rel));
  });
  if (unmatched.length > 0) {
    console.log(`\n목록표 경로와 매칭되지 않는 daeyang-photos 파일 ${unmatched.length}개 (파일명/폴더 오타 확인):`);
    for (const f of unmatched) {
      console.log(`  - ${path.relative(sourceDir, f).replace(/\\/g, "/")}`);
    }
  }

  if (plan.length === 0) {
    console.log("\n반영할 파일이 없습니다.");
    return;
  }

  if (isDryRun) {
    console.log("\n--dry-run 모드: 실제 반영은 하지 않았습니다.");
    return;
  }

  if (!skipConfirm) {
    const answer = await ask(`\n위 ${plan.length}개 파일을 public/products에 반영할까요? (y/N) `);
    if (answer.trim().toLowerCase() !== "y") {
      console.log("취소했습니다.");
      return;
    }
  }

  for (const p of plan) {
    await writeFile(p.dest, p.result.buffer);
    console.log(`  ✓ ${p.relPath}`);
  }

  console.log(`\n완료: ${plan.length}개 파일 반영됨.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
