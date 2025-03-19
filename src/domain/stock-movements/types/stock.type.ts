import { Product } from "@/domain/products/types/list-products.type";

export type StockMovementType = keyof typeof StockMovementType;
export const StockMovementType = {
  ENTRY: "ENTRY",
  EXIT: "EXIT",
} as const;

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
  isFirstMovement: boolean;
}

export interface StockMutationError {
  statusCode: number;
  message: string;
  error: string;
}
