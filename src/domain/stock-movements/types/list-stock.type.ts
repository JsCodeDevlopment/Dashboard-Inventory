import { Product } from "@/domain/products/types/list-products.type";

export interface StockMovement {
  id: string;
  productId: string;
  productName: String;
  quantity: number;
  movementType: StockMovementType;
  date: string;
  product: Product;
  serviceId?: string;
  negotiatedValue: number;
}

export type StockMovementType = keyof typeof StockMovementType;
export const StockMovementType = {
  ENTRY: "ENTRY",
  EXIT: "EXIT",
} as const;

export interface ListStockMovementProps {
  productName?: string;
  movementType?: string;
}
