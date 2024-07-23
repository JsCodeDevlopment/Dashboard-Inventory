"use client";

import React from "react";
import { FormRegisterView } from "@/app/(auth)/register/_components/form-register/view";
import { useFormRegister } from "@/app/(auth)/register/_components/form-register/model";

export const FormRegister: React.FC = () => {
  const model = useFormRegister();

  return <FormRegisterView {...model} />;
};
