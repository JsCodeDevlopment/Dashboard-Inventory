"use client";

import { useAccountForm } from "@/app/app/settings/_components/forms/account/model";
import { AccountFormView } from "@/app/app/settings/_components/forms/account/view";
import React from "react";

export const AccountForm: React.FC = () => {
  const model = useAccountForm();

  return <AccountFormView {...model} />;
};
