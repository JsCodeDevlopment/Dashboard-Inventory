import { z } from "zod";

export const deleteAccountSchema = z
  .object({
    confirm: z.string(),
  })
  .refine((data) => data.confirm.toLowerCase() === "excluir", {
    message: "Para excluir sua conta, digite 'excluir' para confirmar",
    path: ["confirm"],
  });

export type DeleteAccountSchema = z.infer<typeof deleteAccountSchema>;
