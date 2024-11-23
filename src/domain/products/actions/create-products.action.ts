import { CreateProductProps } from "@/domain/products/types/create-products.type";
import {
  Product
} from "@/domain/products/types/list-products.type";
import { api } from "@/lib/axios/api";

export async function createProduct({
  name,
  details,
  price,
  purchaseDate,
  quantity,
  unit,
}: CreateProductProps) {
  const response = await api.post<Product>("/product", {
    name,
    details,
    price,
    purchaseDate,
    quantity,
    unit,
  });
  return response.data;
}
