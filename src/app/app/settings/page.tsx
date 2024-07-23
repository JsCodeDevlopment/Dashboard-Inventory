"use client";

import { AccountForm } from "@/app/app/settings/_components/forms/account";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NextPage } from "next";
import { DeleteAccountForm } from "@/app/app/settings/_components/forms/delete-account";

const SettingsPage: NextPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-6">
      <Card className="flex-1">
        <CardHeader className="space-y-6">
          <div>
            <CardTitle className="text-lg">Minha conta</CardTitle>
            <CardDescription>
              Mantenha sempre suas informações pessoais atualizadas
            </CardDescription>
          </div>
          <Separator />
        </CardHeader>
        <CardContent>
          <AccountForm />
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardHeader className="space-y-6">
          <div>
            <CardTitle className="text-lg">Excluir conta</CardTitle>
            <CardDescription>
              Essa ação é irreversível, tenha certeza do que está fazendo
            </CardDescription>
          </div>
          <Separator />
        </CardHeader>
        <CardContent>
          <DeleteAccountForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
