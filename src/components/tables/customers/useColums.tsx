import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/Dialog";
import { GetCustomer } from "@/domain/customer/types/customer.type";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import { SaveCustomerForm } from "./form/form";

interface ColumnsProps {
  router: AppRouterInstance;
  handleDeleteCustomer: (id: string) => void;
  isDeleting: boolean;
}

export const useColumns = ({
  router,
  handleDeleteCustomer,
  isDeleting,
}: ColumnsProps): ColumnDef<GetCustomer>[] =>
  React.useMemo(
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
        header: () => <span className="w-fit text-center">Editar</span>,
        cell: ({ row }) => (
          <Dialog
            title="Editar Cliente"
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          >
            <SaveCustomerForm
              data={{
                id: row.original.id,
                name: row.original.name,
                contact: row.original.contact,
              }}
            />
          </Dialog>
        ),
      },
      {
        accessorKey: "id",
        header: () => <span className="w-fit text-center">Excluir</span>,
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
            <Button onClick={() => handleDeleteCustomer(row.original.id)}>
              Excluir
            </Button>
          </Dialog>
        ),
      },
    ],
    [router, isDeleting]
  );
