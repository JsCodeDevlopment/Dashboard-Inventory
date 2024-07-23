"use client";

import React from "react";
import { FormLoginView } from "@/app/(auth)/login/_components/form-login/view";
import { useFormLogin } from "@/app/(auth)/login/_components/form-login/model";

export const FormLogin: React.FC = () => {
  const model = useFormLogin();

  return <FormLoginView {...model} />;
};
