import { ProductUnit } from "@/domain/products/types/list-products.type";

export interface CreateProductProps {
  name: string;
  price: number;
  quantity: number;
  unit: ProductUnit;
  purchaseDate: Date;
  details?: string;
}
