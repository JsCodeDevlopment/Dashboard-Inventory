import { BarChartAlerts } from "@/app/app/dashboard/_components/charts/bar-chart-alerts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export const Occurrences: React.FC = () => {
  return (
    <>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="text-base">Relatório de vendas</CardTitle>
          <CardDescription>Última semana</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex">
          <BarChartAlerts />
        </CardContent>
      </Card>
    </>
  );
};
