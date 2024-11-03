"use client";

import { SaveProductForm } from "@/components/tables/products/form";
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
import { SaveServiceForm } from "./form";

interface Services {
  id: string;
  clientName: string;
  contact: string; // Added contact field
  device: string;
  defect: string;
  receivedDate: string;
  deliveryDate: string;
  value: number;
  status: "received" | "waiting" | "done";
  advance: number;
  remainingValue: number;
  paid: boolean;
}

interface Customer {
  id: string;
  name: string;
  contact: string;
  services: Services[];
}

const customers: Customer[] = [
  {
    id: "1",
    name: "João da Silva",
    contact: "(11) 99999-9999",
    services: [
      {
        id: "1",
        clientName: "João da Silva",
        contact: "(11) 99999-9999",
        device: "Notebook",
        defect: "Tela quebrada",
        receivedDate: "2024-11-02T14:48:00.000Z",
        deliveryDate: "2024-11-05T14:48:00.000Z",
        value: 200,
        status: "received",
        advance: 100,
        remainingValue: 100,
        paid: false,
      },
      {
        id: "2",
        clientName: "João da Silva",
        contact: "(11) 99999-9999",
        device: "Smartphone",
        defect: "Tela quebrada",
        receivedDate: "2024-11-02T14:48:00.000Z",
        deliveryDate: "2024-11-05T14:48:00.000Z",
        value: 150,
        status: "waiting",
        advance: 0,
        remainingValue: 150,
        paid: false,
      },
    ],
  },
  {
    id: "2",
    name: "Maria da Silva",
    contact: "(11) 99999-9999",
    services: [
      {
        id: "3",
        clientName: "Maria da Silva",
        contact: "(11) 99999-9999",
        device: "Notebook",
        defect: "Tela quebrada",
        receivedDate: "2024-11-02T14:48:00.000Z",
        deliveryDate: "2024-11-05T14:48:00.000Z",
        value: 200,
        status: "received",
        advance: 100,
        remainingValue: 100,
        paid: false,
      },
      {
        id: "4",
        clientName: "Maria da Silva",
        contact: "(11) 99999-9999",
        device: "Smartphone",
        defect: "Tela quebrada",
        receivedDate: "2024-11-02T14:48:00.000Z",
        deliveryDate: "2024-11-05T14:48:00.000Z",
        value: 150,
        status: "waiting",
        advance: 0,
        remainingValue: 150,
        paid: false,
      },
    ],
  },
];

export function DataTableCustomers() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<Customer[]>(customers);

  const columns: ColumnDef<Customer>[] = React.useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => <span className="w-fit text-center">Nome</span>,
      },
      {
        accessorKey: "contact",
        header: () => <span className="w-fit text-center">Contato</span>,
      },
      {
        accessorKey: "services",
        header: () => (
          <span className="w-fit text-center">Quantidade de Serviços</span>
        ),
        cell: ({ row }) => row.original.services.length,
      },
      {
        accessorKey: "id",
        header: () => (
          <span className="w-fit text-center">
            Detalhes do Cliente
          </span>
        ),
        cell: ({ row }) => <Button>Mais Detalhes</Button>,
      },
      {
        accessorKey: "id",
        header: () => (
          <span className="w-fit text-center">Editar</span>
        ),
        cell: ({ row }) => (
          <Dialog
            title="Editar Cliente"
            description="Edite as informações do cliente"
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          >
            <div>form de edição caso precise</div>
          </Dialog>
        ),
      },
      {
        accessorKey: "id",
        header: () => (
          <span className="w-fit text-center">Excluir</span>
        ),
        cell: ({ row }) => (
          <Dialog
            title="Excluir Cliente"
            description="Tem certeza que deseja excluir esse cliente? Essa ação não pode ser desfeita. Após a exclusão, o cliente e suas informações não estarão mais disponíveis."
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            }
          >
            <Button onClick={() => handleDeleteService(row.original.id)}>
              Excluir
            </Button>
          </Dialog>
        ),
      },
    ],
    []
  );

  const handleDeleteService = (serviceId: string) => {
    setData((prevData) =>
      prevData.filter((service) => service.id !== serviceId)
    );
  };

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000 * 2);
  }, []);

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
              placeholder="Buscar serviço..."
              className="border p-2 rounded w-96"
              onChange={(e) => {
                setTimeout(() => {
                  const searchTerm = e.target.value.toLowerCase();

                  setData(
                    customers.filter((product) =>
                      product.name.toLowerCase().includes(searchTerm)
                    )
                  );
                }, 1000);
              }}
            />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
          {/* <Dialog
            title="Adicionar Serviço"
            description="Adicione um novo serviço"
            className="w-[65rem]"
            trigger={<Button>Adicionar Serviço</Button>}
          >
            <SaveServiceForm />
          </Dialog> */}
        </div>
        <DataTable columns={columns} table={table} isLoading={isLoading} />
      </div>
    </div>
  );
}
