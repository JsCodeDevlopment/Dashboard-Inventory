"use client";

import React from "react";
import { LockKeyhole, Palette, UserCircleIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { useActivePath } from "@/hooks/use-active-path";

const navigation = [
  // {
  //   name: "Minha conta",
  //   href: "/app/settings",
  //   icon: UserCircleIcon,
  // },
  // {
  //   name: "Segurança",
  //   href: "/app/settings/security",
  //   icon: LockKeyhole,
  // },
  {
    name: "Aparência",
    href: "/app/settings/appearence",
    icon: Palette,
  },
];

export const SettingsSidebar: React.FC = () => {
  const { isActiveEquals } = useActivePath();
  return (
    <Card className="py-6 px-4">
      <nav className="grid gap-2" aria-label="Sidebar">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            data-active={isActiveEquals(item.href)}
            className="text-base data-[active=true]:bg-muted data-[active=true]:text-primary flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary data-[active=false]:hover:bg-muted/60 dark:data-[active=false]:hover:bg-muted/20"
          >
            <item.icon className="-ml-1 mr-3 h-6 w-6" aria-hidden="true" />
            {item.name}
          </a>
        ))}
      </nav>
    </Card>
  );
};
