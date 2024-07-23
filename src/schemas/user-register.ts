import { z } from "zod";
import { passwordBaseRegexSchema } from "@/schemas/password-form";

export const userRegisterSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Preencha com seu nome completo",
    })
    .max(50, {
      message: "O nome deve ter no máximo 50 caracteres",
    }),
  email: z
    .string()
    .email({
      message: "Preencha com um e-mail válido",
    })
    .max(100, {
      message: "O e-mail deve ter no máximo 100 caracteres",
    }),
  password: passwordBaseRegexSchema(
    z
      .string()
      .min(8, {
        message: "A senha deve ter no mínimo 8 caracteres.",
      })
      .max(20, {
        message: "A senha deve ter no máximo 20 caracteres.",
      })
  ),
});

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;
