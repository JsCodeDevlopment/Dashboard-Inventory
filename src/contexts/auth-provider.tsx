"use client";

import { CredentialsSchema } from "@/schemas/credentials";
import { auth } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { createContext } from "react";
import { toast } from "sonner";
import { userKeys } from "@/factories/query-keys";
import { AxiosError } from "axios";
import { routesMap } from "@/constants/routes-map";

export interface AuthContextData {
  isPending: boolean;
  login: ({ email, password }: CredentialsSchema) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: auth.login,
    onSuccess: ({ access_token }) => {
      setCookie("app-track", access_token, {
        maxAge: 60 * 60 * 24,
      });
      toast.success("Login feito com sucesso!");
      router.replace(routesMap.dashboard);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return toast.error("E-mail ou senha inválidos!");
        }
      }
      toast.error("Erro ao fazer login");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.me });
      router.refresh();
    },
  });

  const login = ({ email, password }: CredentialsSchema) => {
    mutate({ email, password });
  };

  const logout = () => {
    queryClient.clear();
    deleteCookie("app-track");
    router.replace(routesMap.login);
  };

  return (
    <AuthContext.Provider
      value={{
        isPending,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
