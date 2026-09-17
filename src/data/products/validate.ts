import type { CategoryData } from "./types";
import type { CategoryMeta } from "./categories";
import { CategoryDataSchema } from "./schema";

const PLACEHOLDER_VALUES = new Set(["확인 필요"]);

export interface SpecIssue {
  category: string;
  productId: string;
  productName: string;
  field: string;
  reason: "placeholder" | "empty";
}

export function validateProductsData(
  productsData: Record<string, CategoryData>,
  categoryMetas: CategoryMeta[],
): SpecIssue[] {
  const publishedKeys = new Set(
    categoryMetas.filter((c) => c.published).map((c) => c.key),
  );
  const issues: SpecIssue[] = [];

  for (const [category, data] of Object.entries(productsData)) {
    const result = CategoryDataSchema.safeParse(data);
    if (!result.success) {
      console.warn(`[products] ${category}: schema validation failed —`, result.error.flatten());
      continue;
    }

    if (!publishedKeys.has(category)) continue;

    for (const product of data.products) {
      for (const [field, value] of Object.entries(product.specs)) {
        if (PLACEHOLDER_VALUES.has(value)) {
          issues.push({ category, productId: product.id, productName: product.name, field, reason: "placeholder" });
        } else if (value.trim() === "") {
          issues.push({ category, productId: product.id, productName: product.name, field, reason: "empty" });
        }
      }
    }
  }

  if (issues.length > 0) {
    console.warn(
      `[products] ${issues.length} spec value(s) need review in published categories (placeholder/empty). See docs/todo-specs.md.`,
    );
  }

  return issues;
}
