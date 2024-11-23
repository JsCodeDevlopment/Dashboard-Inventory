import { AddProductProps } from "@/domain/products/types/add-products.type";
import { Product } from "@/domain/products/types/list-products.type";
import { api } from "@/lib/axios/api";

export async function addProduct({
  id,
  price,
  purchaseDate,
  quantity,
}: AddProductProps) {
  const response = await api.post<Product>("/product/increment-stock", {
    id,
    price,
    purchaseDate,
    quantity,
  });
  return response.data;
}
