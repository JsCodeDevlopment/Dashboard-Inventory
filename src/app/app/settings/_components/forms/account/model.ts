"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { userKeys } from "@/factories/query-keys";
import { useUser } from "@/hooks/use-user";
import {
  accountFormSchema,
  type AccountFormSchema,
} from "@/schemas/account-form";
import { user as userService } from "@/services/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export const useAccountForm = () => {
  const [isDisabledForm, setIsDisabledForm] = useState(true);
  const queryClient = useQueryClient();
  const { isLoading, user } = useUser();

  const form = useForm<AccountFormSchema>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
    disabled: isDisabledForm,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: userService.updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.me });
      toast.success("Informações atualizadas com sucesso");
      setIsDisabledForm(true);
    },
    onError: () => {
      toast.error("Erro ao atualizar informações");
    },
  });

  const onSubmit = (data: AccountFormSchema) => {
    mutate(data);
  };

  return {
    form,
    isPending,
    isLoading,
    isDisabledForm,
    onSubmit,
    setIsDisabledForm,
  };
};

export type AccountFormModel = ReturnType<typeof useAccountForm>;
