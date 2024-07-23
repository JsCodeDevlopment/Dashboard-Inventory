"use client";

import React from "react";
import { useDeleteAccountForm } from "@/app/app/settings/_components/forms/delete-account/model";
import { DeleteAccountFormView } from "@/app/app/settings/_components/forms/delete-account/view";

export const DeleteAccountForm: React.FC = () => {
  const model = useDeleteAccountForm();

  return <DeleteAccountFormView {...model} />;
};
