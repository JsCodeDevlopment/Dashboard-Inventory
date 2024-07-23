import { CarFront, LayoutDashboard, Settings } from "lucide-react";
import { routesMap } from "@/constants/routes-map";

export const navLinks = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: routesMap.dashboard,
  },
  {
    icon: CarFront,
    title: "Veículos",
    href: routesMap.vehicles,
  },
  {
    icon: Settings,
    title: "Configurações",
    href: routesMap.settings,
  },
] as const;
