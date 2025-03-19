import { api } from "@/lib/axios/api";

export async function deleteStock(movementId: string) {
  const response = await api.delete(`/stock-movements/${movementId}`);
  return response.data;
}
