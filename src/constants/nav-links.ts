import { routesMap } from "@/constants/routes-map";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  NotebookPen,
  Package,
  PackageMinus,
  Settings,
  User,
} from "lucide-react";

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
    icon: User,
    title: "Clientes",
    href: routesMap.customers,
  },
  {
    icon: PackageMinus,
    title: "Movimentações no Estoque",
    href: routesMap.stockMovements,
  },
  {
    icon: NotebookPen,
    title: "Relatórios",
    href: routesMap.reports,
  },
  {
    icon: Settings,
    title: "Configurações",
    href: routesMap.settings,
  },
] as const;
