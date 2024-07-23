import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PieChartVehicleStatus } from "@/app/app/dashboard/_components/charts/pie-chart-vehicle-status";

export const VehicleStatus = () => {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-base">Status dos veiculos</CardTitle>
        <CardDescription>Hoje</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1">
        <PieChartVehicleStatus />
      </CardContent>
    </Card>
  );
};
