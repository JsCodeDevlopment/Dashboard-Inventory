import { isValid, parseISO } from "date-fns";
import { z } from "zod";

export const formSchema = z.object({
  productId: z.string().min(1, "Produto é obrigatório"),
  quantity: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Quantity must be a positive number",
    }),
  negotiatedValue: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Value must be a positive number",
    }),
  date: z
    .string()
    .nonempty("Date is required")
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid date format",
    }),
  movementType: z.enum(["ENTRY", "EXIT"]),
});
