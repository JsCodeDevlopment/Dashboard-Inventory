import { StockMovementType } from "./stock.type";

export interface AddStockProps {
  productId: string;
  date: string;
  negotiatedValue: number;
  quantity: number;
  movementType: StockMovementType;
}
