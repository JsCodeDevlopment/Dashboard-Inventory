import { z } from "zod";

export const credentialsSchema = z.object({
  email: z.string().email({
    message: "Preencha o e-mail corretamente",
  }),
  password: z.string().min(8, {
    message: "Preencha a senha corretamente",
  }),
});

export type CredentialsSchema = z.infer<typeof credentialsSchema>;
