"use client";

import Link from "next/link";
import React from "react";

import { MinimalLogo } from "@/components/logo";
import { ToggleNotification } from "@/components/toggle-notification";
import { navLinks } from "@/constants/nav-links";
import { useActivePath } from "@/hooks/use-active-path";

export const Sidebar: React.FC = () => {
  const { isActive } = useActivePath();

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <span className="flex items-center gap-2 font-semibold">
          <MinimalLogo className="size-8 rounded-md" />
          <span className="text-lg font-bold">
            App<span className="text-primary">Track</span>
          </span>
        </span>
        <ToggleNotification />
      </div>
      <div className="flex-1">
        <nav className="grid items-start pt-4 lg:pt-6 px-2 text-sm font-medium lg:px-4 gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              data-active={isActive(item.href)}
              className="text-base data-[active=true]:bg-muted data-[active=true]:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary data-[active=false]:hover:bg-muted/60 dark:data-[active=false]:hover:bg-muted/20"
            >
              <item.icon className="h-6 w-6" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
