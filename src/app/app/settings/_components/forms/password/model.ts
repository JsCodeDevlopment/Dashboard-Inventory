"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import {
  passwordFormSchema,
  type PasswordFormSchema,
} from "@/schemas/password-form";
import { user } from "@/services/user";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

export const usePasswordForm = () => {
  const [isVisiblePasswords, setIsVisiblePasswords] = useState({
    password: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const form = useForm<PasswordFormSchema>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: user.updatePassword,
    onSuccess: () => {
      toast("Senha alterada com sucesso!");
      form.reset();
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 400) {
        return toast("Senha atual incorreta!");
      }
    },
  });

  const onSubmit = (data: PasswordFormSchema) => {
    mutate({
      password: data.password,
      newPassword: data.newPassword,
    });
  };
  return {
    form,
    isPending,
    isVisiblePasswords,
    onSubmit,
    setIsVisiblePasswords,
  };
};

export type PasswordFormModel = ReturnType<typeof usePasswordForm>;
