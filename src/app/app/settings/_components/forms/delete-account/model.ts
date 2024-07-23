"use client";

import { useAuth } from "@/hooks/use-auth";
import {
  deleteAccountSchema,
  type DeleteAccountSchema,
} from "@/schemas/delete-account-form";
import { user } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useDeleteAccountForm = () => {
  const { logout } = useAuth();

  const form = useForm<DeleteAccountSchema>({
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: {
      confirm: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: user.delete,
    onSuccess: () => {
      toast.success("Conta excluída com sucesso!");
      logout();
    },
    onError: () => {
      toast.error("Erro ao excluir conta!");
    },
  });

  const onSubmit = (data: DeleteAccountSchema) => {
    if (data.confirm === "excluir") {
      mutate();
    }
  };

  return {
    form,
    isPending,
    onSubmit,
  };
};

export type DeleteAccountFormModel = ReturnType<typeof useDeleteAccountForm>;