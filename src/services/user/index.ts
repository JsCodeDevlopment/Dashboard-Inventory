import { api } from "@/lib/axios/api";
import type {
  RegisterInput,
  RegisterOutput,
  UpdateUserInput,
  UpdateUserOutput,
  UserWithoutPassword,
} from "@/services/user/types/";

export const user = {
  me: async () => {
    try {
      const response = await api.get<UserWithoutPassword>("/user/me");
      return response.data;
    } catch (error) {
      return null;
    }
  },
  register: async ({ email, name, password }: RegisterInput) => {
    const response = await api.post<RegisterOutput>("/user", {
      email,
      name,
      password,
    });
    return response.data;
  },
  updatePassword: async ({
    password,
    newPassword,
  }: {
    password: string;
    newPassword: string;
  }) => {
    await api.patch("/user/password", {
      password: password,
      newPassword: newPassword,
    });
  },
  delete: async () => {
    await api.delete("/user");
  },
  updateUser: async ({ name, email, phone }: UpdateUserInput) => {
    const updatedUser = await api.patch<UpdateUserOutput>("/user", {
      name,
      email,
      phone,
    });
    return updatedUser.data;
  },
};
