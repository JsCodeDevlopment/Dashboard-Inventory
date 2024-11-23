import { CreateProductProps } from "@/domain/products/types/create-products.type";

export interface UpdateProductProps extends Partial<CreateProductProps> {
  productId: string;
}
