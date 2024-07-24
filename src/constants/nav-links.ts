import { GraduationCap, LayoutDashboard, Settings } from "lucide-react";
import { routesMap } from "@/constants/routes-map";

export const navLinks = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: routesMap.dashboard,
  },
  {
    icon: GraduationCap,
    title: "Courses",
    href: routesMap.courses,
  },
  {
    icon: Settings,
    title: "Configurações",
    href: routesMap.settings,
  },
] as const;
