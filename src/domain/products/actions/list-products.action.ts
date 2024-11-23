import {
  ListProductProps,
  Product,
} from "@/domain/products/types/list-products.type";
import { api } from "@/lib/axios/api";

export async function getProducts({ name }: ListProductProps) {
  const response = await api.get<Product[]>("/product", {
    params: { name },
  });
  return response.data;
}
