"use client";

import { useDebounce } from "@/components/common/Debounce";
import AddMoreForm from "@/components/tables/products/add-more-form";
import { SaveProductForm } from "@/components/tables/products/form";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/DataTable";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/input";
import { useProducts } from "@/domain/products/hooks/products.hook";
import { Product } from "@/domain/products/types/list-products.type";
import { FormatHelper } from "@/services/common/format.helper";
import { DateFormatter } from "@/services/common/formatDate";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pencil, Plus, Search, Trash } from "lucide-react";
import React from "react";

export function DataTableProducts() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const {
    ListProductsQuery: { data: Products, isLoading, refetch },
  } = useProducts({
    name: debouncedSearchTerm,
  });

  const columns: ColumnDef<Product>[] = React.useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => <span className="w-fit text-center">Produto</span>,
      },
      {
        accessorKey: "price",
        header: () => (
          <span className="w-fit text-center">Valor da compra</span>
        ),
        cell: ({ row }) => FormatHelper.toMoney(row.original.price).conversion,
      },
      {
        accessorKey: "date",
        header: () => <span className="w-fit text-center">Data da compra</span>,
        cell: ({ row }) => DateFormatter.formatDate(row.original.purchaseDate),
      },
      {
        accessorKey: "unit",
        header: () => <span className="w-fit text-center">Unidade</span>,
      },
      {
        accessorKey: "quantity",
        header: () => <span className="w-fit text-center">Quantidade</span>,
      },
      {
        accessorKey: "details",
        header: () => <span className="w-fit text-center">Detalhes</span>,
      },
      {
        accessorKey: "id",
        header: () => <span className="w-fit text-center">Adicionar Mais</span>,
        cell: ({ row }) => (
          <div className="flex flex-1 justify-center">
            <Dialog
              title="Adicionar Mais Produto"
              description="Adicione mais produtos ao estoque"
              className="w-[65rem]"
              trigger={
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              }
            >
              <AddMoreForm />
            </Dialog>
          </div>
        ),
      },
      {
        accessorKey: "id",
        header: () => <span className="w-fit text-center">Editar</span>,
        cell: ({ row }) => (
          <Dialog
            title="Editar Produto"
            description="Edite as informações do produto"
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          >
            <SaveProductForm data={row.original} />
          </Dialog>
        ),
      },
      {
        accessorKey: "id",
        header: () => <span className="w-fit text-center">Excluir</span>,
        cell: ({ row }) => (
          <Dialog
            title="Excluir Produto"
            description="Tem certeza que deseja excluir o produto? Essa ação não pode ser desfeita. Após a exclusão, o produto e suas informações não estarão mais disponível."
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            }
          >
            <Button onClick={() => {}}>Excluir</Button>
          </Dialog>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    columns,
    data: Products ?? [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-full h-screen max-xl:flex-col max-xl:items-start max-lg:gap-3">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-3 justify-between">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar produto..."
              className="border p-2 rounded w-96"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
          <Dialog
            title="Adicionar Produto"
            description="Adicione um novo produto ao estoque"
            className="w-[65rem]"
            trigger={<Button>Adicionar Produto</Button>}
          >
            <SaveProductForm />
          </Dialog>
        </div>
        <DataTable columns={columns} table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
