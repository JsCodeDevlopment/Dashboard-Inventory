import { Service } from "@/domain/services/types/service.type";
import { z } from "zod";
import { formSchema } from "./form.schema";

export type FormValues = z.infer<typeof formSchema>;

export interface SaveServiceFormProps {
  data?: {
    id: string;
    clientName: string;
    contact: string;
    device: string;
    defect: string;
    receivedAt: string;
    deliveryDate: string;
    value: number;
    advanceValue: number | null;
    remainingValue: number | null;
    status: Service["status"];
  };
}
