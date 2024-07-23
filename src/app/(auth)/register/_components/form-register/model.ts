"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

import { routesMap } from "@/constants/routes-map";
import { userRegisterSchema } from "@/schemas/user-register";
import { user } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useFormRegister = () => {
  const router = useRouter();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<z.infer<typeof userRegisterSchema>>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: user.register,
    onSuccess: () => {
      toast.success("Cadastro realizado com sucesso!");
      router.push(routesMap.dashboard);
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 409) {
        toast.error("Email já cadastrado");
        return;
      }
      if (error instanceof AxiosError && error.response?.status === 400) {
        toast.error("Verifique os campos e tente novamente");
        return;
      }
      toast.error("Erro ao criar conta");
    },
  });

  const onSubmit = async (values: z.infer<typeof userRegisterSchema>) => {
    mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };
  return {
    form,
    isVisiblePassword,
    isPending,
    onSubmit,
    setIsVisiblePassword,
  };
};
