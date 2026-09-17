import type { CategoryData } from "./types";
import { imageExists } from "../../utils/images";

export interface MissingImage {
  category: string;
  productId: string;
  productName: string;
  field: string;
  src: string;
}

function check(
  category: string,
  productId: string,
  productName: string,
  field: string,
  src: string,
  out: MissingImage[],
) {
  if (!imageExists(src)) {
    out.push({ category, productId, productName, field, src });
  }
}

export function findMissingImages(productsData: Record<string, CategoryData>): MissingImage[] {
  const missing: MissingImage[] = [];

  for (const [category, data] of Object.entries(productsData)) {
    for (const p of data.products) {
      check(category, p.id, p.name, "img", p.img, missing);
      if (p.specImg) check(category, p.id, p.name, "specImg", p.specImg, missing);
      for (const img of p.images ?? []) check(category, p.id, p.name, "images", img.src, missing);
      for (const img of p.drawings ?? []) check(category, p.id, p.name, "drawings", img.src, missing);
    }
  }

  return missing;
}

export function warnMissingImages(productsData: Record<string, CategoryData>): MissingImage[] {
  const missing = findMissingImages(productsData);

  if (missing.length > 0) {
    console.warn(`[products] public/에 없는 이미지 파일 ${missing.length}개 — 화면에는 "사진/외관도 준비중"으로 표시됩니다:`);
    for (const m of missing) {
      console.warn(`  - [${m.category}] ${m.productName}(${m.productId}).${m.field}: ${m.src}`);
    }
  }

  return missing;
}
