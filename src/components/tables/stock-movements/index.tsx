"use client";

import { RegisterSaleForm } from "@/components/tables/stock-movements/form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/DataTable";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/input";
import { FormatHelper } from "@/services/common/format.helper";
import { DateFormatter } from "@/services/common/formatDate";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pencil, Search, Trash } from "lucide-react";
import React from "react";
// import { SaveMovementForm } from "@/components/tables/stock/SaveMovementForm";

interface StockMovement {
  id: string;
  product: string;
  movementType: "entrada" | "saida";
  quantity: number;
  date: string;
  value: number;
}

const movements: StockMovement[] = [
  {
    id: "1",
    product: "Carregador de celular",
    movementType: "saida",
    quantity: 1,
    date: "2024-10-20T14:48:00.000Z",
    value: 15,
  },
  {
    id: "2",
    product: "Fone de ouvido",
    movementType: "entrada",
    quantity: 2,
    date: "2024-10-20T14:48:00.000Z",
    value: 25,
  },
  {
    id: "3",
    product: "Carregador de celular",
    movementType: "entrada",
    quantity: 1,
    date: "2024-10-20T14:48:00.000Z",
    value: 15,
  },
  {
    id: "4",
    product: "Fone de ouvido",
    movementType: "saida",
    quantity: 2,
    date: "2024-10-20T14:48:00.000Z",
    value: 25,
  },
];

export function DataTableMovements() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<StockMovement[]>(movements);

  const columns: ColumnDef<StockMovement>[] = [
    {
      accessorKey: "product",
      header: "Produto",
    },
    {
      accessorKey: "movementType",
      header: "Tipo de Movimento",
      cell: ({ row }) => (
        <Badge
          variant={
            row.original.movementType === "entrada" ? "default" : "secondary"
          }
        >
          {row.original.movementType === "entrada" ? "Entrada" : "Saída"}
        </Badge>
      ),
    },
    {
      accessorKey: "quantity",
      header: "Quantidade",
    },
    {
      accessorKey: "date",
      header: "Data",
      cell: ({ row }) => DateFormatter.formatDate(row.original.date),
    },
    {
      accessorKey: "value",
      header: "Valor",
      cell: ({ row }) => FormatHelper.toMoney(row.original.value).conversion,
    },
    {
      accessorKey: "id",
      header: "Ações",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Dialog
            title="Editar Movimento"
            description="Edite as informações do movimento de estoque"
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          >
            <p>form aqui</p>
            {/* <SaveMovementForm data={row.original} /> */}
          </Dialog>
          <Dialog
            title="Excluir Movimento"
            description="Tem certeza que deseja excluir este movimento? Esta ação não pode ser desfeita."
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            }
          >
            <Button onClick={() => handleDeleteMovement(row.original.id)}>
              Excluir
            </Button>
          </Dialog>
        </div>
      ),
    },
  ];

  const handleDeleteMovement = (movementId: string) => {
    setData((prevData) =>
      prevData.filter((movement) => movement.id !== movementId)
    );
  };

  const table = useReactTable({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex w-full h-screen max-xl:flex-col max-xl:items-start max-lg:gap-3">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-3 justify-between">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar movimento..."
              className="border p-2 rounded w-96"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                setData(
                  movements.filter((movement) =>
                    movement.product.toLowerCase().includes(searchTerm)
                  )
                );
              }}
            />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
          <Dialog
            title="Adicionar Movimento"
            description="Adicione um novo movimento de estoque"
            className="w-[65rem]"
            trigger={<Button>Registrar Venda</Button>}
          >
            <RegisterSaleForm
              products={[
                { id: "1", name: "Carregador de celular" },
                {
                  id: "2",
                  name: "Fone de ouvido",
                },
                { id: "3", name: "Carregador de celular" },
                {
                  id: "4",
                  name: "Fone de ouvido",
                },
              ]}
            />
          </Dialog>
        </div>
        <DataTable columns={columns} table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
