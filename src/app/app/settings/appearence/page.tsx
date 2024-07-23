import { NextPage } from "next";
import { AppearanceForm } from "@/app/app/settings/_components/forms/appearence";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AppearencePage: NextPage = () => {
  return (
    <Card className="flex-1">
      <CardHeader className="space-y-6">
        <div>
          <CardTitle className="text-lg">Aparência</CardTitle>
          <CardDescription>Escolha o tema de sua preferência</CardDescription>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <AppearanceForm />
      </CardContent>
    </Card>
  );
};

export default AppearencePage;
