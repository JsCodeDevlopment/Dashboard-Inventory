"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MapPin, MoreHorizontal } from "lucide-react";

import { type Vehicle } from "@/components/tables/vehicles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<Vehicle>[] = [
  {
    id: "Placa",
    accessorKey: "licensePlate",
    header: "Placa",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Placa")}</div>
    ),
  },
  {
    id: "Status",
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="pl-4">
        {row.getValue("Status") === "Em movimento" && (
          <Badge
            className="text-blue-700 font-bold bg-blue-200 text-nowrap"
            variant="outline"
          >
            Em movimento
          </Badge>
        )}

        {row.getValue("Status") === "Parado" && (
          <Badge
            className="text-yellow-700 font-bold bg-yellow-200"
            variant="outline"
          >
            Parado
          </Badge>
        )}
        {row.getValue("Status") === "Offline" && (
          <Badge
            className="text-red-700 font-bold bg-red-200"
            variant="outline"
          >
            Offline
          </Badge>
        )}
      </div>
    ),
  },
  {
    id: "Marca",
    accessorKey: "make",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Marca
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize pl-4">{row.getValue("Marca")}</div>
    ),
  },
  {
    id: "Modelo",
    accessorKey: "model",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modelo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize pl-4">{row.getValue("Modelo")}</div>
    ),
  },
  {
    id: "Localização",
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Localização
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const [lat, long] = (row.getValue("Localização") as string).split(", ");
      return (
        <span className="pl-4 flex gap-2 items-center text-foreground hover:text-primary transition-colors">
          <MapPin className="inline-block w-4 h-4" />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${lat},${long}`}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {row.getValue("Localização") as string}
          </a>
        </span>
      );
    },
  },
  {
    id: "Ações",
    accessorKey: "actions",
    enableHiding: false,
    header: "Ações",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Excluir</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
