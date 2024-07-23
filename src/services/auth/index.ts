import { api } from "@/lib/axios/api";
import type { LoginInput, LoginOutput } from "@/services/auth/types/";

export const auth = {
  login: async ({ email, password }: LoginInput) => {
    const response = await api.post<LoginOutput>("/auth/login", {
      email,
      password,
    });
    return response.data;
  },
};
