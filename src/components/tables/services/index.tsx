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

const services: Services[] = [
  {
    id: "1",
    clientName: "João da Silva",
    contact: "+55 11 91234-5678", // Changed to phone number
    device: "Samsung Galaxy A10",
    defect: "Tela quebrada",
    receivedDate: "2024-11-02T14:48:00.000Z",
    deliveryDate: "2024-11-05T14:48:00.000Z",
    value: 250,
    status: "received",
    advance: 100,
    remainingValue: 150,
    paid: false,
  },
  {
    id: "2",
    clientName: "Maria",
    contact: "+55 21 98765-4321", // Changed to phone number
    device: "Samsung Galaxy A20",
    defect: "Tela quebrada",
    receivedDate: "2024-10-15T14:48:00.000Z",
    deliveryDate: "",
    value: 300,
    status: "waiting",
    advance: 0,
    remainingValue: 300,
    paid: false,
  },
  {
    id: "3",
    clientName: "José",
    contact: "+55 31 99876-5432", // Changed to phone number
    device: "Samsung Galaxy A30",
    defect: "Entrada do carregador queimada",
    receivedDate: "2023-12-05T14:48:00.000Z",
    deliveryDate: "2023-12-08T14:48:00.000Z",
    value: 70,
    status: "done",
    advance: 70,
    remainingValue: 0,
    paid: true,
  },
  {
    id: "4",
    clientName: "Ana Maria da Silva Santos",
    contact: "+55 41 91234-5678", // Changed to phone number
    device: "Iphone 12 Pro Max",
    defect: "Troca de placa",
    receivedDate: "2023-12-05T14:48:00.000Z",
    deliveryDate: "",
    value: 1500,
    status: "waiting",
    advance: 0,
    remainingValue: 1500,
    paid: false,
  },
  {
    id: "5",
    clientName: "Carlos Eduardo",
    contact: "+55 51 98765-4321", // Changed to phone number
    device: "Iphone 11",
    defect: "Troca de bateria",
    receivedDate: "2023-12-05T14:48:00.000Z",
    deliveryDate: "",
    value: 300,
    status: "done",
    advance: 0,
    remainingValue: 300,
    paid: false,
  },
];

export function DataTableServices() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<Services[]>(services);

  const columns: ColumnDef<Services>[] = React.useMemo(
    () => [
      {
        accessorKey: "clientName",
        header: () => <span className="w-fit text-center">Cliente</span>,
      },
      {
        accessorKey: "contact",
        header: () => <span className="w-fit text-center">Contato</span>, // Added contact column
      },
      {
        accessorKey: "device",
        header: () => <span className="w-fit text-center">Dispositivo</span>,
      },
      {
        accessorKey: "defect",
        header: () => <span className="w-fit text-center">Defeito</span>,
      },
      {
        accessorKey: "receivedDate",
        header: () => (
          <span className="w-fit text-center">Data de Recebimento</span>
        ),
        cell: ({ row }) => DateFormatter.formatDate(row.original.receivedDate),
      },
      {
        accessorKey: "deliveryDate",
        header: () => (
          <span className="w-fit text-center">Data de Entrega</span>
        ),
        cell: ({ row }) =>
          row.original.deliveryDate
            ? DateFormatter.formatDate(row.original.deliveryDate)
            : "Não definido",
      },
      {
        accessorKey: "value",
        header: () => <span className="w-fit text-center">Valor</span>,
        cell: ({ row }) => FormatHelper.toMoney(row.original.value).conversion,
      },
      {
        accessorKey: "status",
        header: () => <span className="w-fit text-center">Status</span>,
        cell: ({ row }) => (
          <Badge
            variant={
              row.original.status === "received"
                ? "default"
                : row.original.status === "waiting"
                ? "secondary"
                : "destructive"
            }
          >
            {row.original.status === "received"
              ? "Recebido"
              : row.original.status === "waiting"
              ? "Aguardando"
              : "Concluído"}
          </Badge>
        ),
      },
      {
        accessorKey: "advance",
        header: () => <span className="w-fit text-center">Adiantamento</span>,
        cell: ({ row }) =>
          FormatHelper.toMoney(row.original.advance).conversion,
      },
      {
        accessorKey: "remainingValue",
        header: () => <span className="w-fit text-center">Valor Restante</span>,
        cell: ({ row }) =>
          FormatHelper.toMoney(row.original.remainingValue).conversion,
      },
      {
        accessorKey: "paid",
        header: () => <span className="w-fit text-center">Quitação</span>,
        cell: ({ row }) => (row.original.paid ? "Pago" : "Pendente"),
      },
      {
        accessorKey: "id",
        header: () => <span className="w-full flex justify-center">Ações</span>,
        cell: ({ row }) => (
          <div className="flex gap-2">
            {!row.original.paid && <Button>Finalizar Serviço</Button>}
            <Dialog
              title="Editar Serviço"
              description="Edite as informações do serviço"
              className="w-[65rem]"
              trigger={
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              }
            >
              <SaveServiceForm
                data={{
                  id: row.original.id,
                  clientName: row.original.clientName,
                  contact: row.original.contact, // Added contact field
                  device: row.original.device,
                  defect: row.original.defect,
                  receivedDate: row.original.receivedDate,
                  deliveryDate: row.original.deliveryDate,
                  value: row.original.value,
                  status: row.original.status,
                  advance: row.original.advance,
                  remainingValue: row.original.remainingValue,
                }}
              />
            </Dialog>
            <Dialog
              title="Excluir Serviço"
              description="Tem certeza que deseja excluir esse serviço? Essa ação não pode ser desfeita. Após a exclusão, o serviço e suas informações não estarão mais disponíveis."
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
          </div>
        ),
      },
    ],
    []
  );

  const handleAddProduct = (newProduct: Services) => {
    setData((prevData) => [...prevData, newProduct]);
  };

  const handleDeleteService = (serviceId: string) => {
    setData((prevData) =>
      prevData.filter((service) => service.id !== serviceId)
    );
  };

  const handleUpdateProduct = (updatedProduct: Services) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
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
                    services.filter((product) =>
                      product.clientName.toLowerCase().includes(searchTerm)
                    )
                  );
                }, 1000);
              }}
            />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
          <Dialog
            title="Adicionar Serviço"
            description="Adicione um novo serviço"
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
