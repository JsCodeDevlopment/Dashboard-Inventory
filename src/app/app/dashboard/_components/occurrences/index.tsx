import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartAlerts } from "@/app/app/dashboard/_components/charts/bar-chart-alerts";

export const Occurrences: React.FC = () => {
  return (
    <>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="text-base">Média de Uso Semanal</CardTitle>
          <CardDescription>Última semana</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex">
          <BarChartAlerts />
        </CardContent>
      </Card>
    </>
  );
};
