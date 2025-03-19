import { api } from "@/lib/axios/api";
import { ListStockMovementProps } from "../types/list-stock.type";
import { StockMovement } from "../types/stock.type";

export async function getStockMovements({
  productName,
  movementType,
}: ListStockMovementProps) {
  const response = await api.get<StockMovement[]>("/stock-movements", {
    params: { productName, movementType },
  });
  return response.data;
}
