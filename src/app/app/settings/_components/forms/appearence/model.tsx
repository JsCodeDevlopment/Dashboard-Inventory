"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  appearanceFormSchema,
  type AppearanceFormSchema,
} from "@/schemas/appearance-form";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { toast } from "sonner";

type Theme = "light" | "dark";

export const useAppearanceForm = () => {
  const { setTheme, theme } = useTheme();

  const form = useForm<AppearanceFormSchema>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: undefined,
    },
  });

  const onSubmit = (data: AppearanceFormSchema) => {
    setTheme(data.theme);
    toast.success("Tema salvo com sucesso!");
  };

  useEffect(() => {
    form.setValue("theme", (theme as Theme) || "light");
  }, [theme, form]);

  return {
    form,
    onSubmit,
  };
};

export type AppearanceFormModel = ReturnType<typeof useAppearanceForm>;
