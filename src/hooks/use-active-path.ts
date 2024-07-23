"use client";

import { usePathname } from "next/navigation";

export const useActivePath = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.includes(href);
  };

  const isActiveEquals = (href: string) => {
    return pathname === href;
  };

  return {
    isActive,
    isActiveEquals,
  };
};
