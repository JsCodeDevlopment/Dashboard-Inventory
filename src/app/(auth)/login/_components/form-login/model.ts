"use client";

import { type z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/hooks/use-auth";
import { credentialsSchema } from "@/schemas/credentials";

export const useFormLogin = () => {
  const { login, isPending } = useAuth();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof credentialsSchema>) => {
    login({ email: values.email, password: values.password });
  };

  return {
    form,
    isVisiblePassword,
    isPending,
    setIsVisiblePassword,
    onSubmit,
  };
};
