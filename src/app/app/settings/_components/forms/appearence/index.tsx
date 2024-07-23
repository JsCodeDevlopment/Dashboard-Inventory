"use client";

import { useAppearanceForm } from "@/app/app/settings/_components/forms/appearence/model";
import { AppearanceFormView } from "@/app/app/settings/_components/forms/appearence/view";

export const AppearanceForm: React.FC = () => {
  const model = useAppearanceForm();

  return <AppearanceFormView {...model} />;
};
