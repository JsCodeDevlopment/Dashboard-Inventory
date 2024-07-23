"use client";

import { UserContext, UserContextData } from "@/contexts/user-provider";
import { useContext } from "react";

export const useUser = (): UserContextData => {
  const context = useContext(UserContext);

  if (!context) {
    return {
      isLoading: false,
      user: null,
    };
  }
  return context;
};
