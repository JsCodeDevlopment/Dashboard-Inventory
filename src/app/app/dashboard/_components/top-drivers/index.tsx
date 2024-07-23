import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { CircleUser } from "lucide-react";
import React from "react";

const topDrivers = [
  {
    id: 1,
    name: "João Silva",
    avatar: "https://avatar.iran.liara.run/public/1",
  },
  {
    id: 2,
    name: "Pedro Costa",
    avatar: "https://avatar.iran.liara.run/public/2",
  },
  {
    id: 3,
    name: "Miguel Santos",
    avatar: "https://avatar.iran.liara.run/public/3",
  },
  {
    id: 4,
    name: "Lucas Oliveira",
    avatar: "https://avatar.iran.liara.run/public/4",
  },
  {
    id: 5,
    name: "Gabriel Pereira",
    avatar: "https://avatar.iran.liara.run/public/5",
  },
];

export const TopDrivers: React.FC = () => {
  return (
    <Card className="overflow-hidden flex-1">
      <CardHeader>
        <CardTitle className="text-base">Top motoristas</CardTitle>
        <CardDescription>Última semana</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {topDrivers.map((driver, i) => (
            <div key={driver.id} className="flex items-center gap-4">
              <div className="font-medium">{i + 1}º</div>
              <Avatar className="h-9 w-9 flex items-center justify-center bg-secondary rounded-full">
                <CircleUser className="h-5 w-5" />
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none truncate">
                  {driver.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
