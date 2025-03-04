import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Client name is required"),
  contact: z.string().min(6, "Contact is required"),
});
