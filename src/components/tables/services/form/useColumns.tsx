import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog } from "@/components/ui/Dialog";
import { DialogClose } from "@/components/ui/dialog-ui";
import { GetService } from "@/domain/services/types/service.type";
import { FormatHelper } from "@/services/common/format.helper";
import { DateFormatter } from "@/services/common/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { Trash, Pencil } from "lucide-react";
import React from "react";
import { SaveServiceForm } from "./form";

interface ColumnsProps {
  handleFinishService: (id: string) => void;
  handleDeleteService: (id: string) => void;
  isDeleting: boolean;
}

export const useColumns = ({
  handleFinishService,
  handleDeleteService,
  isDeleting,
}: ColumnsProps): ColumnDef<GetService>[] =>
  React.useMemo(
    () => [
      {
        accessorKey: "clientName",
        header: () => <span className="w-fit text-center">Cliente</span>,
        cell: ({ row }) => (
          <span className="w-fit text-center">
            {row.original.customer.name}
          </span>
        ),
      },
      {
        accessorKey: "contact",
        header: () => <span className="w-fit text-center">Contato</span>,
        cell: ({ row }) => (
          <span className="w-fit text-center">
            {row.original.customer.contact}
          </span>
        ),
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
        cell: ({ row }) => DateFormatter.formatDate(row.original.receivedAt),
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
              row.original.status === "RECEIVED"
                ? "default"
                : row.original.status === "IN_PROGRES"
                ? "secondary"
                : "destructive"
            }
          >
            {row.original.status === "RECEIVED"
              ? "Recebido"
              : row.original.status === "IN_PROGRES"
              ? "Aguardando"
              : "Concluído"}
          </Badge>
        ),
      },
      {
        accessorKey: "advanceValue",
        header: () => <span className="w-fit text-center">Adiantamento</span>,
        cell: ({ row }) =>
          FormatHelper.toMoney(row.original.advanceValue).conversion,
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
        cell: ({ row }) => (row.original.isPaid ? "Pago" : "Pendente"),
      },
      {
        accessorKey: "id",
        header: () => <span className="w-full flex justify-center">Ações</span>,
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Dialog
              title="Finalizar Serviço"
              description="Deseja finalizar o serviço?"
              className="w-[65rem]"
              trigger={
                !row.original.isPaid && <Button>Finalizar Serviço</Button>
              }
            >
              <DialogClose
                className={buttonVariants()}
                onClick={() => handleFinishService(row.original.id)}
              >
                Finalizar
              </DialogClose>
            </Dialog>
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
                  contact: row.original.customer.contact,
                  device: row.original.device,
                  defect: row.original.defect,
                  receivedAt: row.original.receivedAt,
                  deliveryDate: row.original.deliveryDate,
                  value: row.original.value,
                  status: row.original.status,
                  advanceValue: row.original.advanceValue,
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
    [handleFinishService, handleDeleteService, isDeleting]
  );
