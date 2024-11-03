import { api } from "@/lib/axios/api";
import {
  Role,
  type RegisterInput,
  type RegisterOutput,
  type UpdateUserInput,
  type UpdateUserOutput,
  type UserWithoutPassword,
} from "@/services/user/types/";
import { LoginOutput } from "../auth/types";

const fakeUser: LoginOutput = {
  access_token: "asdasd-asd-as-dasdadad-ad",
  user: {
    email: "tester@mail.com",
    id: "1",
    name: "Cabra da Peste",
    role: Role.ADMIN,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

export const user = {
  me: async () => {
    try {
      // const response = await api.get<UserWithoutPassword>("/user/me");
      return fakeUser;
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
