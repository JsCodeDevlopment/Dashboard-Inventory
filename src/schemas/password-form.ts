import { z } from "zod";

export const passwordBaseRegexSchema = (schema: z.ZodString) => {
  return schema
    .regex(/(?=.*[A-Z])/, {
      message: "Deve ter pelo menos 1 letra maiúscula",
    })
    .regex(/(?=.*[a-z])/, {
      message: "Deve ter pelo menos 1 letra minúscula",
    })
    .regex(/(?=.*\W+)/, {
      message: "Deve ter pelo menos 1 caracter especial",
    })
    .regex(/(?=.*\d)/, {
      message: "Deve ter pelo menos 1 número",
    });
};

export const passwordFormSchema = z
  .object({
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
    newPassword: passwordBaseRegexSchema(
      z
        .string()
        .min(8, {
          message: "A nova senha deve ter no mínimo 8 caracteres.",
        })
        .max(20, {
          message: "A nova senha deve ter no máximo 20 caracteres.",
        })
    ),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "As nova senha e a confirmação não coincidem.",
    path: ["confirmNewPassword"],
  });

export type PasswordFormSchema = z.infer<typeof passwordFormSchema>;
