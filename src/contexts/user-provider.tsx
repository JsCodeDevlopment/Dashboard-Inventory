"use client";

import { userKeys } from "@/factories/query-keys";
import { user as userService } from "@/services/user";
import { UserWithoutPassword } from "@/services/user/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { createContext } from "react";
import { toast } from "sonner";

export interface UserContextData {
  isLoading: boolean;
  user: UserWithoutPassword | null;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    isLoading,
    data: userResponse,
    error,
  } = useSuspenseQuery({
    queryKey: userKeys.me,
    queryFn: userService.me,
    refetchOnWindowFocus: false,
  });

  if (error) {
    toast.error("Erro inesperado", {
      description: "Ocorreu um erro ao carregar os dados do usuário",
    });
  }

  return (
    <UserContext.Provider
      value={{
        user: userResponse?.data || null,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
