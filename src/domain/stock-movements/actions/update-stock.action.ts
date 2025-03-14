import { api } from "@/lib/axios/api";
import { UpdateStockProps } from "../types/update-stock.type";
import { StockMovement } from "../types/list-stock.type";

export async function updateStock({ id, ...rest }: UpdateStockProps) {
  const response = await api.put<StockMovement>(`/stock-movements/${id}`, {
    ...rest,
  });
  return response.data;
}
