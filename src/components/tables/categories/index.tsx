"use client";

import { SaveProductForm } from "@/components/tables/categories/form";
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

export type Category = {
  id: string;
  name: string;
};

interface Products {
  id: number;
  name: string;
  date: string;
  buy_price: number;
  quantity: number;
  details: string;
  unit: "un" | "cx" | "pct" | "kg";
}
const products: Products[] = [
  {
    id: 1,
    name: "Carregador 24v",
    date: "2024-11-02T14:48:00.000Z",
    buy_price: 20,
    quantity: 30,
    details: "Carregador de bateria 24v",
    unit: "un",
  },
  {
    id: 2,
    name: "Fone de ouvido estério",
    date: new Date("2024-10-15T14:48:00.000Z").toISOString(),
    buy_price: 12,
    quantity: 22,
    details: "Fone de ouvido estério com microfone",
    unit: "un",
  },
  {
    id: 3,
    name: "Cabo USB-C",
    date: new Date("2023-12-05T14:48:00.000Z").toISOString(),
    buy_price: 5,
    quantity: 100,
    details: "Cabo USB-C de 1m",
    unit: "un",
  },
];

export function DataTableCategories() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<Products[]>(products);

  const columns: ColumnDef<Products>[] = React.useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => <span className="w-fit text-center">Produto</span>,
      },
      {
        accessorKey: "buy_price",
        header: () => (
          <span className="w-fit text-center">Valor da compra</span>
        ),
        cell: ({ row }) =>
          FormatHelper.toMoney(row.original.buy_price).conversion,
      },
      {
        accessorKey: "date",
        header: () => <span className="w-fit text-center">Data da compra</span>,
        cell: ({ row }) => DateFormatter.formatDate(row.original.date),
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
            <SaveProductForm
              data={{
                id: "1",
                name: row.original.name,
                date: row.original.date,
                value: row.original.buy_price,
                quantity: row.original.quantity,
                details: row.original.details,
                unit: row.original.unit,
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
            title="Excluir Produto"
            description="Tem certeza que deseja excluir o produto? Essa ação não pode ser desfeita. Após a exclusão, o produto e suas informações não estarão mais disponível."
            className="w-[65rem]"
            trigger={
              <Button variant="outline" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            }
          >
            <Button
              onClick={() => handleDeleteProduct(row.original.id)}
            >
              Excluir
            </Button>
          </Dialog>
        ),
      },
    ],
    []
  );

  const handleAddProduct = (newProduct: Products) => {
    setData((prevData) => [...prevData, newProduct]);
  };

  const handleDeleteProduct = (productId: number) => {
    setData((prevData) =>
      prevData.filter((product) => product.id !== productId)
    );
  };

  const handleUpdateProduct = (updatedProduct: Products) => {
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
              placeholder="Buscar produto..."
              className="border p-2 rounded w-96"
              onChange={(e) => {
                setTimeout(() => {
                  const searchTerm = e.target.value.toLowerCase();

                  setData(
                    products.filter((product) =>
                      product.name.toLowerCase().includes(searchTerm)
                    )
                  );
                }, 1000);
              }}
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
