import { z } from "zod";
import { formSchema } from "./form.schema";
import { Product } from "@/domain/products/types/list-products.type";

export type FormValues = z.infer<typeof formSchema>;

export interface SaveStockMovimentFormProps {
  data?: {
    id: string;
    productId: string;
    quantity: number;
    movementType: "ENTRY" | "EXIT";
    date: string;
    negotiatedValue: number;
  };
  products: Product[];
}
