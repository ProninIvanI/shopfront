export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: ProductCategory;
  imageUrl: string;
  oldPrice?: number;
};

export type ProductCategory =
  | "electronics"
  | "kitchenUtensils"
  | "clothes"
  | "tools";

export type SelectedCategory = ProductCategory | 'all';

export type ProductSort =
  | "none"
  | "alphabet"
  | "reverseAlphabet"
  | "coinAscending"
  | "coinNotAscending"
  | "feedbackAscending"
  | "feedbackNotAscending";
