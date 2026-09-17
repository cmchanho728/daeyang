import { z } from "astro/zod";

export const ProductImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  img: z.string().min(1),
  specImg: z.string().optional(),
  images: z.array(ProductImageSchema).optional(),
  drawings: z.array(ProductImageSchema).optional(),
  specs: z.record(z.string()).refine((specs) => Object.keys(specs).length > 0, {
    message: "specs must have at least one entry",
  }),
});

export const CategoryDataSchema = z.object({
  pageTitle: z.string().min(1),
  pageDescription: z.string().min(1),
  products: z.array(ProductSchema),
});
