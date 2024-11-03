import { BestSellersStatus } from "@/app/app/dashboard/_components/charts/best-sellers-status";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const BestSellers = () => {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-base">Produtos mais vendidos</CardTitle>
        <CardDescription>Últimos 7 dias</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1">
        <BestSellersStatus />
      </CardContent>
    </Card>
  );
};
