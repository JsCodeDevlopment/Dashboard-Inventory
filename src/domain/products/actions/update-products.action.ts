import { Product } from "@/domain/products/types/list-products.type";
import { UpdateProductProps } from "@/domain/products/types/update-products.type";
import { api } from "@/lib/axios/api";

export async function updateProduct({
  name,
  details,
  price,
  purchaseDate,
  quantity,
  unit,
  productId,
}: UpdateProductProps) {
  const response = await api.put<Product>(`/product/${productId}`, {
    name,
    details,
    price,
    purchaseDate,
    quantity,
    unit,
  });
  return response.data;
}
