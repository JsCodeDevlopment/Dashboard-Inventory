import { CredentialsSchema } from "@/schemas/credentials";
import { UserWithoutPassword } from "@/services/user/types";

export interface LoginInput extends CredentialsSchema {}
export interface LoginOutput {
  access_token: string;
  user: UserWithoutPassword;
}
