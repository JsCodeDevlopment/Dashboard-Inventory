import { z } from "zod";
import { isValid, parseISO } from "date-fns";

export const StatusEnum = {
  received: "RECEIVED",
  in_progres: "IN_PROGRES",
  completed: "COMPLETED",
} as const;

export const formSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  contact: z.string().min(1, "Contact is required"),
  device: z.string().min(1, "Device is required"),
  defect: z.string().min(1, "Defect is required"),
  receivedAt: z
    .string()
    .nonempty("Delivery Date is required")
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid date format",
    }),
  deliveryDate: z
    .string()
    .nonempty("Delivery Date is required")
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid date format",
    }),
  value: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Value must be a positive number",
    }),
  advanceValue: z
    .union([z.string(), z.number(), z.null()])
    .transform((val) => (val && Number(val) > 0 ? Number(val) : null)),
  remainingValue: z
    .union([z.string(), z.number(), z.null()])
    .transform((val) => (val && Number(val) > 0 ? Number(val) : null)),
  status: z.nativeEnum(StatusEnum),
});
