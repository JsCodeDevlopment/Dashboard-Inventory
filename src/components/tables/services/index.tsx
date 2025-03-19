"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/DataTable";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/input";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Search } from "lucide-react";
import React from "react";
import { SaveServiceForm } from "./form/form";
import { useServices } from "@/domain/services/hooks/service.hook";
import { useDebounce } from "@/components/common/Debounce";
import { useColumns } from "./form/useColumns";

export function DataTableServices() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const {
    ListServicesQuery: { data: Services, isLoading, refetch },
    FinishServiceMutation: { mutate: FinishService },
    DeleteServiceMutation: { mutate: DeleteService, isPending: isDeleting },
  } = useServices({
    clientName: debouncedSearchTerm,
  });

  const handleDeleteService = (serviceId: string) => {
    DeleteService({ serviceId });
  };

  const handleFinishService = async (serviceId: any) => {
    FinishService({ serviceId });
  };

  const columns = useColumns({
    handleDeleteService,
    handleFinishService,
    isDeleting,
  });

  const table = useReactTable({
    columns,
    data: Services ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex w-full h-screen max-xl:flex-col max-xl:items-start max-lg:gap-3">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-3 justify-between">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar serviço..."
              className="border p-2 rounded w-96"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
          <Dialog
            title="Adicionar Serviço"
            className="w-[65rem]"
            trigger={<Button>Adicionar Serviço</Button>}
          >
            <SaveServiceForm />
          </Dialog>
        </div>
        <DataTable columns={columns} table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
