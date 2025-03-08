import { AddStockProps } from "./add-stock.type";

export interface UpdateStockProps extends Partial<AddStockProps> {
  id: string;
}
