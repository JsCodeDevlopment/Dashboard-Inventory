import { api } from "@/lib/axios/api";
import { StockMovement } from "../types/list-stock.type";
import { AddStockProps } from "../types/add-stock.type";

export async function addStock(data: AddStockProps) {
  const response = await api.post<StockMovement>("/stock-movements", data);
  return response.data;
}
