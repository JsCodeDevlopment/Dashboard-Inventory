import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog } from "@/components/ui/Dialog";
import { DialogClose } from "@/components/ui/dialog-ui";
import { FormatHelper } from "@/services/common/format.helper";
import { DateFormatter } from "@/services/common/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { Trash, Pencil } from "lucide-react";
import React from "react";
import { StockMovement } from "@/domain/stock-movements/types/stock.type";
import { RegisterSaleForm } from "./form/form";
import { Product } from "@/domain/products/types/list-products.type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ColumnsProps {
  router: AppRouterInstance;
  products: Product[];
  handleDeleteMovement: (id: string) => void;
  isDeleting: boolean;
}

export const useColumns = ({
  router,
  products,
  handleDeleteMovement,
  isDeleting,
}: ColumnsProps): ColumnDef<StockMovement>[] =>
  React.useMemo(
    () => [
      {
        accessorKey: "product",
        header: "Produto",
        cell: ({ row }) => row.original.product.name,
      },
      {
        accessorKey: "movementType",
        header: "Tipo de Movimento",
        cell: ({ row }) => (
          <Badge
            variant={
              row.original.movementType === "ENTRY" ? "default" : "secondary"
            }
          >
            {row.original.movementType === "ENTRY" ? "Entrada" : "Saída"}
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
        cell: ({ row }) =>
          FormatHelper.toMoney(row.original.negotiatedValue).conversion,
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
              <RegisterSaleForm
                products={products}
                data={{
                  id: row.original.id,
                  productId: row.original.product.id,
                  date: row.original.date,
                  negotiatedValue: row.original.negotiatedValue,
                  quantity: row.original.quantity,
                  movementType: row.original.movementType,
                }}
              />
            </Dialog>
            <Dialog
              title={
                row.original.isFirstMovement ? "Aviso" : "Excluir Movimento"
              }
              description={
                row.original.isFirstMovement
                  ? ""
                  : "Tem certeza que deseja excluir este movimento? Esta ação não pode ser desfeita."
              }
              className="w-[65rem]"
              trigger={
                <Button variant="outline" size="icon">
                  <Trash className="h-4 w-4" />
                </Button>
              }
            >
              {row.original.isFirstMovement &&
                "Essa movimentação é o registro do produto, para remove-la o produto deve ser removido"}
              <DialogClose
                className={buttonVariants()}
                onClick={
                  row.original.isFirstMovement
                    ? () => router.push("/app/products")
                    : () => handleDeleteMovement(row.original.id)
                }
              >
                {row.original.isFirstMovement ? "Remover produto" : "Excluir"}
              </DialogClose>
            </Dialog>
          </div>
        ),
      },
    ],
    [handleDeleteMovement, isDeleting]
  );
