#!/usr/bin/env node
/**
 * daeyang-photos 폴더의 새 제품사진을 public/products의 해당 위치로 반영한다.
 *
 * - 대상은 "제품사진"(img / images[])만. 외관도(specImg / drawings[])는 교체 대상에서 제외한다.
 * - daeyang-photos 안의 원본 파일은 절대 수정/삭제하지 않는다(읽기 전용으로만 사용).
 * - 매칭은 파일명(basename)이 대상 경로의 파일명과 정확히 같은 파일을 daeyang-photos에서 재귀 검색해 찾는다.
 *   예: public/products/vc/valve/safety.jpg 를 교체하려면 daeyang-photos 어딘가에 "safety.jpg"가 있어야 한다.
 * - 매칭된 파일은 흰 배경 1200x1200 정사각형 캔버스 가운데에, 제품이 캔버스의 약 80%를 차지하도록
 *   리사이즈해 합성한 뒤 품질을 유지하며 압축해서 저장한다.
 *
 * 사용법:
 *   node scripts/replace-photos.mjs            # 바뀔 파일 목록만 보여주고 확인을 물음
 *   node scripts/replace-photos.mjs --dry-run  # 목록만 보여주고 종료 (미반영)
 *   node scripts/replace-photos.mjs --yes      # 확인 프롬프트 없이 바로 반영 (자동화용)
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
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
const PRODUCT_SCALE = 0.8; // 제품이 캔버스의 약 80%를 차지

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

/** src/data/products/*.ts 를 정규식으로 훑어서 "제품사진"(img, images[])만 추려낸다.
 *  외관도(specImg, drawings[])는 대상에서 제외한다. TS를 직접 실행하지 않고
 *  텍스트로만 읽어서, 이 스크립트가 astro/zod 등 프로젝트 런타임에 의존하지 않게 한다. */
function collectProductPhotoTargets() {
  const targets = [];

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
        targets.push({ file, category: categoryOf(file), id: currentId, name: currentName, field: "img", relPath: imgMatch[1] });
      }

      const srcMatch = line.match(/^\s*src:\s*`\$\{baseUrl\}([^`]+)`/);
      if (srcMatch && inImages && !inDrawings) {
        targets.push({ file, category: categoryOf(file), id: currentId, name: currentName, field: "images[]", relPath: srcMatch[1] });
      }
    }
  }

  return targets;
}

function categoryOf(file) {
  return file.replace(/\.ts$/, "");
}

function walk(dir, out) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
}

function buildSourceIndex() {
  const files = [];
  walk(sourceDir, files);
  const byBasename = new Map();
  for (const f of files) {
    const base = path.basename(f).toLowerCase();
    if (!byBasename.has(base)) byBasename.set(base, []);
    byBasename.get(base).push(f);
  }
  return byBasename;
}

async function processImage(sourcePath, destPath) {
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

  const ext = path.extname(destPath).toLowerCase();
  if (ext === ".png") {
    await canvas.png({ quality: 90 }).toFile(destPath);
  } else {
    await canvas.jpeg({ quality: 90, mozjpeg: true }).toFile(destPath);
  }
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

  const targets = collectProductPhotoTargets();
  const sourceIndex = buildSourceIndex();

  const plan = [];
  const ambiguous = [];
  const noSource = [];

  const seenTargets = new Set();
  for (const t of targets) {
    if (seenTargets.has(t.relPath)) continue; // 같은 파일이 여러 필드에서 참조되는 경우 한 번만 처리
    seenTargets.add(t.relPath);

    const base = path.basename(t.relPath).toLowerCase();
    const matches = sourceIndex.get(base) ?? [];

    if (matches.length === 0) {
      noSource.push(t);
    } else if (matches.length > 1) {
      ambiguous.push({ ...t, matches });
    } else {
      plan.push({ ...t, source: matches[0], dest: path.join(publicDir, t.relPath) });
    }
  }

  console.log(`[replace-photos] 대상(제품사진) 참조 총 ${seenTargets.size}개, daeyang-photos에서 매칭된 파일 ${plan.length}개`);

  if (plan.length > 0) {
    console.log("\n반영될 파일:");
    for (const p of plan) {
      console.log(`  - [${p.category}] ${p.name}(${p.id}): ${p.source} -> public/${p.relPath}`);
    }
  }

  if (ambiguous.length > 0) {
    console.log("\n동일한 파일명이 daeyang-photos에 여러 개 있어 건너뜀 (직접 확인 필요):");
    for (const a of ambiguous) {
      console.log(`  - ${path.basename(a.relPath)}: ${a.matches.join(", ")}`);
    }
  }

  if (noSource.length > 0) {
    console.log(`\ndaeyang-photos에서 못 찾은 대상 ${noSource.length}개 (아직 준비 안 된 사진, 건너뜀)`);
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
    await processImage(p.source, p.dest);
    console.log(`  ✓ ${p.relPath}`);
  }

  console.log(`\n완료: ${plan.length}개 파일 반영됨.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
