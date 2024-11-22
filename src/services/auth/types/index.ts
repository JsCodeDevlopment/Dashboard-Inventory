import { CredentialsSchema } from "@/schemas/credentials";
import { UserWithoutPassword } from "@/services/user/types";

export interface LoginInput extends CredentialsSchema {}
export interface LoginOutput {
  accessToken: string;
  user: UserWithoutPassword;
}
