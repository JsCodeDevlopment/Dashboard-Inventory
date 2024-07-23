import { NextPage } from "next";

import { PasswordForm } from "@/app/app/settings/_components/forms/password/";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SecurityPage: NextPage = () => {
  return (
    <Card className="flex-1">
      <CardHeader className="space-y-6">
        <div>
          <CardTitle className="text-lg">Alterar senha</CardTitle>
          <CardDescription>
            Para manter sua conta segura, use uma senha forte e única.
          </CardDescription>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <PasswordForm />
      </CardContent>
    </Card>
  );
};

export default SecurityPage;
