import { z } from "zod";
import { formSchema } from "./form.schema";

export type FormValues = z.infer<typeof formSchema>;

export interface SaveCustomerFormProps {
  data?: {
    id: string;
    name: string;
    contact: string;
  };
}
