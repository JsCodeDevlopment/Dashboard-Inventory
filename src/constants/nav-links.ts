import { routesMap } from "@/constants/routes-map";
import { BriefcaseBusiness, LayoutDashboard, Package, Settings } from "lucide-react";

export const navLinks = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: routesMap.dashboard,
  },
  {
    icon: Package,
    title: "Produtos",
    href: routesMap.products,
  },
  {
    icon: BriefcaseBusiness,
    title: "Serviços",
    href: routesMap.services,
  },
  {
    icon: Settings,
    title: "Configurações",
    href: routesMap.settings,
  },
] as const;
