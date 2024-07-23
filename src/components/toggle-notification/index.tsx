"use client";

import { Bell, CircleAlert } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const ToggleNotification: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <Card className="border-0 shadow-lg">
          <CardHeader className="border-b">
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground">
                <CircleAlert className="w-4 h-4" />
              </div>
              <div className="">
                <p className="text-sm font-medium text-muted-foreground">
                  Você não possui notificações
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
