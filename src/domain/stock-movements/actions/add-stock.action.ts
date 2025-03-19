import { api } from "@/lib/axios/api";
import { AddStockProps } from "../types/add-stock.type";
import { StockMovement } from "../types/stock.type";

export async function addStock(data: AddStockProps) {
  const response = await api.post<StockMovement>("/stock-movements", data);
  return response.data;
}
