import { DeleteProductProps } from "@/domain/products/types/delete-products.type";
import { Product } from "@/domain/products/types/list-products.type";
import { api } from "@/lib/axios/api";

export async function deleteProduct({ productId }: DeleteProductProps) {
  const response = await api.delete<Product>(`/product/${productId}`);
  return response.data;
}
