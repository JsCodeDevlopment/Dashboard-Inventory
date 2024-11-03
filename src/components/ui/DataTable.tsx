"use client";

import { Skeleton } from "@/components/ui/skeleton";
import * as ShadcnTable from "@/components/ui/table";
import { cn } from "@/lib/tw-merge";
import {
  ColumnDef,
  flexRender,
  Table as TableType,
} from "@tanstack/react-table";

interface TableProps<T, U> {
  caption?: string;
  isLoading: boolean;
  table: TableType<T>;
  columns: ColumnDef<T, U>[];
}

export function DataTable<T, U>({
  caption,
  table,
  isLoading,
  columns,
}: TableProps<T, U>) {
  return (
    <ShadcnTable.Table className="font-medium">
      <ShadcnTable.TableCaption>{caption}</ShadcnTable.TableCaption>
      <ShadcnTable.TableHeader className="sticky top-0 self-start bg-background">
        {table.getHeaderGroups().map((headerGroup, i) => (
          <ShadcnTable.TableRow key={i}>
            {headerGroup.headers.map((header, i) => (
              <ShadcnTable.TableHead
                key={i}
                colSpan={header.colSpan}
                className={cn("p-3")}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </ShadcnTable.TableHead>
            ))}
          </ShadcnTable.TableRow>
        ))}
      </ShadcnTable.TableHeader>
      <ShadcnTable.TableBody>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ShadcnTable.TableRow key={`skeleton-row-${index}`}>
              {columns.map((_, cellIndex) => (
                <ShadcnTable.TableCell key={`skeleton-cell-${cellIndex}`}>
                  <Skeleton className="h-8" />
                </ShadcnTable.TableCell>
              ))}
            </ShadcnTable.TableRow>
          ))
        ) : table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, i) => (
            <ShadcnTable.TableRow
              className={cn("odd:bg-popover even:bg-background")}
              key={i}
            >
              {row.getVisibleCells().map((cell, i) => (
                <ShadcnTable.TableCell className={cn("p-3")} key={i}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ShadcnTable.TableCell>
              ))}
            </ShadcnTable.TableRow>
          ))
        ) : (
          <ShadcnTable.TableRow
            className={cn("odd:bg-popover even:bg-background")}
          >
            <ShadcnTable.TableCell colSpan={columns.length}>
              Sem resultados.
            </ShadcnTable.TableCell>
          </ShadcnTable.TableRow>
        )}
      </ShadcnTable.TableBody>
    </ShadcnTable.Table>
  );
}
