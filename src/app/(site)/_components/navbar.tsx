"use client";

import { FullLogo, MinimalLogo } from "@/components/logo";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routesMap } from "@/constants/routes-map";
import { ArrowRightIcon, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Serviços",
    sectionId: "services",
  },
  {
    title: "Benefícios",
    sectionId: "benefits",
  },
  {
    title: "Cases",
    sectionId: "cases",
  },
  {
    title: "Depoimentos",
    sectionId: "testimonials",
  },
  {
    title: "FAQ",
    sectionId: "faq",
  },
];

export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      setTimeout(() => {
        window.scrollTo({
          top: rect.top + window.scrollY - 100,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <header className="z-50 h-24 w-full fixed top-0 left-0 right-0 bg-background shadow-md">
      <div className="container max-w-screen-xl h-full flex justify-between items-center">
        <FullLogo />
        <nav className="flex items-center h-full">
          <ul className="font-semibold text-sm text-foreground gap-6 hidden lg:flex">
            {links.map((link) => (
              <li
                key={link.sectionId}
                className="py-2 cursor-pointer hover:text-primary transition-colors"
                onClick={() => scrollTo(link.sectionId)}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <ToggleTheme />
            <Button
              asChild
              variant="outline"
              className="hidden lg:flex px-6 gap-2 items-center justify-between"
            >
              <Link href={routesMap.login}>
                Login
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="z-[9999]">
                <SheetHeader>
                  <div className="flex justify-start">
                    <MinimalLogo />
                  </div>
                </SheetHeader>
                <div className="pt-8 w-full">
                  <ul className="font-semibold text-sm text-foreground flex flex-col gap-2 w-full">
                    {links.map((link) => (
                      <SheetClose asChild key={link.title}>
                        <li
                          onClick={() => scrollTo(link.sectionId)}
                          className="cursor-pointer w-full flex hover:text-primary py-2 px-4 transition-colors rounded-md hover:bg-muted/40"
                        >
                          {link.title}
                        </li>
                      </SheetClose>
                    ))}
                  </ul>
                </div>
                <SheetFooter className="mt-12">
                  <Button
                    asChild
                    variant="outline"
                    className="px-6 gap-2 items-center justify-center w-full"
                  >
                    <Link href={routesMap.login}>
                      Login
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
