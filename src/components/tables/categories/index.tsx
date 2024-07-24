"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { data } from "./data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings2, Plus } from "lucide-react";
import { SaveCategoryForm } from "./form";

export type Category = {
  id: string;
  name: string;
};

export function DataTableCategories() {
  const [showAllProducts, setShowAllProducts] = useState<boolean>(false);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = data.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex w-full h-screen max-xl:flex-col max-xl:items-start max-lg:gap-3">
      <div className="flex flex-col w-1/2 p-1">
        <h1>Categorias</h1>
        <div className="flex gap-2 items-center py-4">
          <Input
            placeholder="Buscar Categoria"
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={() => setIsClosed(!isClosed)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex w-[28rem] items-center justify-center flex-col gap-3">
          {filteredData
            .slice(0, showAllProducts ? filteredData.length : 5)
            .map((category) => (
              <div
                key={category.id}
                className="flex w-full p-2 gap-5 items-center justify-between shadow-md"
              >
                <div className="flex w-full gap-5 items-center justify-between">
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-lg font-medium text-neutral-content">
                      {category.id}-
                    </p>
                    <p className="text-lg font-medium text-neutral-content">
                      {category.name}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <Settings2 className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex gap-2"></div>
              </div>
            ))}
          <div className="flex w-full items-center justify-center">
            {filteredData.length <= 5 ? (
              <></>
            ) : (
              <Button
                className="btn btn-neutral"
                onClick={() => setShowAllProducts(!showAllProducts)}
              >
                {showAllProducts ? "Mostrar menos" : "Mostrar mais"}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-1">
        <SaveCategoryForm setIsClosed={setIsClosed} isClosed={isClosed} />
      </div>
    </div>
  );
}
