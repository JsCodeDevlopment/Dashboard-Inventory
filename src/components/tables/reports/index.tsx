"use client";

import { DataTable } from "@/components/ui/DataTable";
import { FormatHelper } from "@/services/common/format.helper";
import { DateFormatter } from "@/services/common/formatDate";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

interface ReportData {
  id: string;
  date: string;
  totalIn: number;
  totalOut: number;
  balance: number;
}

const reports: ReportData[] = [
  {
    id: "1",
    date: "2024-10-01T14:48:00.000Z",
    totalIn: 5000,
    totalOut: 3000,
    balance: 2000,
  },
  // Outros relatórios de exemplo
];

export function DataTableReports() {
  const [data, setData] = React.useState<ReportData[]>(reports);
  const [isLoading, setIsLoading] = React.useState(false);

  const columns: ColumnDef<ReportData>[] = [
    {
      accessorKey: "date",
      header: "Data",
      cell: ({ row }) => DateFormatter.formatDate(row.original.date),
    },
    {
      accessorKey: "totalIn",
      header: "Total de Entradas",
      cell: ({ row }) => FormatHelper.toMoney(row.original.totalIn).conversion,
    },
    {
      accessorKey: "totalOut",
      header: "Total de Saídas",
      cell: ({ row }) => FormatHelper.toMoney(row.original.totalOut).conversion,
    },
    {
      accessorKey: "balance",
      header: "Saldo Final",
      cell: ({ row }) => FormatHelper.toMoney(row.original.balance).conversion,
    },
  ];

  const table = useReactTable({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex w-full h-screen max-xl:flex-col max-xl:items-start max-lg:gap-3">
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-2xl font-semibold mb-4">Relatórios</h2>
        <DataTable columns={columns} table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
