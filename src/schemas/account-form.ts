import { z } from "zod";

export const accountFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Nome deve ter no mínimo 3 caracteres.",
    })
    .max(50, {
      message: "Nome deve ter no máximo 50 caracteres.",
    }),
  email: z.string().email({
    message: "Digite um e-mail válido.",
  }),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;
        return value.length >= 14;
      },
      {
        message: "Digite um número de telefone válido.",
      }
    )
    .transform((value) => {
      if (!value) return value;
      return value.replace(/\D/g, "");
    }),
});

export type AccountFormSchema = z.infer<typeof accountFormSchema>;
