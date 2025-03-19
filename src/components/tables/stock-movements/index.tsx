"use client";

import { DataTable } from "@/components/ui/DataTable";
import { Input } from "@/components/ui/input";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Search } from "lucide-react";
import React from "react";
import { useColumns } from "./useColums";
import { useDebounce } from "@/components/common/Debounce";
import { useStockMovement } from "@/domain/stock-movements/hooks/stock.hook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RegisterSaleForm } from "./form/form";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/domain/products/hooks/products.hook";
import { useRouter } from "next/navigation";
// import { SaveMovementForm } from "@/components/tables/stock/SaveMovementForm";

export function DataTableMovements() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const [movementTypeFilter, setMovementTypeFilter] = React.useState("all");

  const {
    ListStockQuery: { data: StockMovement, isLoading },
    DeleteStockMutation: { mutate: DeleteStock, isPending: isDeleting },
  } = useStockMovement({
    productName: debouncedSearchTerm,
    movementType: movementTypeFilter === "all" ? undefined : movementTypeFilter,
  });

  const {
    ListProductsQuery: { data: products },
  } = useProducts();

  const handleDeleteMovement = (movementId: string) => {
    DeleteStock(movementId);
  };

  const router = useRouter();
  const columns = useColumns({
    router,
    products: products ?? [],
    handleDeleteMovement,
    isDeleting,
  });

  const table = useReactTable({
    columns,
    data: StockMovement ?? [],
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-1 gap-2 justify-end">
            <Select
              value={movementTypeFilter}
              onValueChange={setMovementTypeFilter}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tipo De Movimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="ENTRY">Entrada</SelectItem>
                <SelectItem value="EXIT">Saída</SelectItem>
              </SelectContent>
            </Select>
            <Dialog
              title="Adicionar Movimento"
              description="Adicione um novo movimento de estoque"
              className="w-[65rem]"
              trigger={<Button>Registrar Venda</Button>}
            >
              <RegisterSaleForm products={products ?? []} />
            </Dialog>
          </div>
        </div>
        <DataTable columns={columns} table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
