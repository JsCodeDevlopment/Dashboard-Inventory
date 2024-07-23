"use client";

import { useContext } from "react";
import { AuthContext, AuthContextData } from "@/contexts/auth-provider";

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    console.error("useAuth must be used within an AuthProvider");
    return {
      isPending: false,
      login: async () => {
        throw new Error("useAuth must be used within an AuthProvider");
      },
      logout: () => {
        console.error("useAuth must be used within an AuthProvider");
      },
    };
  }
  return context;
};
