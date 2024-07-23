import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  CarFront,
  OctagonAlert,
  Siren,
  FileWarning,
} from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Veículos",
    stat: "17",
    icon: CarFront,
    change: "",
    changeType: "",
  },
  {
    id: 2,
    name: "Infrações",
    stat: "9",
    icon: OctagonAlert,
    change: "5.4%",
    changeType: "increase",
  },
];

export const Stats: React.FC = () => {
  return (
    <>
      {stats.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle className="text-base">{item.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row justify-between">
            <div className="flex items-center gap-6">
              <item.icon className="size-10" />
              <p className="font-bold text-5xl">{item.stat}</p>
            </div>
            <p
              data-change-type={item.changeType}
              className="ml-2 flex items-baseline text-sm font-semibold data-[change-type=decrease]:text-red-500 data-[change-type=increase]:text-green-500"
            >
              {item.changeType === "increase" && (
                <ArrowUp
                  className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              )}

              {item.changeType === "decrease" && (
                <ArrowDown
                  className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              )}

              {item.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
