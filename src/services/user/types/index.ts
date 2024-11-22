import { AccountFormSchema } from "@/schemas/account-form";
import { UserRegisterSchema } from "@/schemas/user-register";

export type UserWithoutPassword = Omit<User, "password">;

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterInput extends UserRegisterSchema {}
export interface RegisterOutput {
  user: UserWithoutPassword;
}

export interface UpdateUserInput extends AccountFormSchema {}
export interface UpdateUserOutput {
  user: UserWithoutPassword;
}
