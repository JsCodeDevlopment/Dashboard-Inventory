export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  details: string;
  unit: ProductUnit;
  purchaseDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductUnit = keyof typeof ProductUnit;
export const ProductUnit = {
  UN: "UN",
  CX: "CX",
  PCT: "PCT",
  KG: "KG",
} as const;

export interface ListProductProps {
  name?: string;
}
