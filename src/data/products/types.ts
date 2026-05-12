export interface ProductImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Product {
  id: string;
  name: string;
  img: string;
  cardImg?: string;
  specImg?: string;
  images?: ProductImage[];
  drawings?: ProductImage[];
  specs: Record<string, string>;
}

export interface CategoryData {
  pageTitle: string;
  pageDescription: string;
  products: Product[];
}
