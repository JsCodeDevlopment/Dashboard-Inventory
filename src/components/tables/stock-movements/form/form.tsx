import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CurrencyInput from "@/components/ui/input-mask";
import { RangeNumberInput } from "@/components/ui/range-number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormValues, SaveStockMovimentFormProps } from "./form.types";
import { formSchema } from "./form.schema";
import { useStockMovement } from "@/domain/stock-movements/hooks/stock.hook";
import { DateFormatter } from "@/services/common/formatDate";

export function RegisterSaleForm({
  data: stockMovement,
  products,
}: SaveStockMovimentFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: stockMovement?.productId ?? "",
      date: stockMovement?.date ?? undefined,
      negotiatedValue: stockMovement?.negotiatedValue ?? undefined,
      quantity: stockMovement?.quantity ?? 1,
      movementType: stockMovement?.movementType ?? "EXIT",
    },
  });

  const {
    CreateStockMutation: { mutate: createStockMovement },
    UpdateStockMutation: { mutate: updateStockMovement },
  } = useStockMovement();

  const onSubmit = (data: FormValues) => {
    if (stockMovement) {
      updateStockMovement({ id: stockMovement.id, ...data });
    } else {
      createStockMovement(data);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {!stockMovement && (
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Produto</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o produto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        )}

        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>
                  Data da{" "}
                  {form.getValues("movementType") === "ENTRY"
                    ? "Compra"
                    : "Venda"}
                </FormLabel>
                <Input
                  type="date"
                  {...field}
                  value={DateFormatter.formatUsDate(field.value) ?? ""}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="negotiatedValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Valor da{" "}
                  {form.getValues("movementType") === "ENTRY"
                    ? "Compra"
                    : "Venda"}
                </FormLabel>
                <FormControl>
                  <CurrencyInput
                    value={field.value ?? ""}
                    onChange={field.onChange}
                    placeholder="R$ 0,00"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Quantidade{" "}
                  {form.getValues("movementType") === "ENTRY"
                    ? "Comprada"
                    : "Vendida"}
                </FormLabel>
                <FormControl>
                  <RangeNumberInput
                    name={field.name}
                    min={1}
                    max={1000}
                    step={1}
                    defaultValue={1}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {!stockMovement && (
            <FormField
              control={form.control}
              name="movementType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Movimentação</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ENTRY">Entrada</SelectItem>
                      <SelectItem value="EXIT">Saída</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          )}
        </div>

        <div className="flex justify-end space-x-2">
          <Button className={buttonVariants()} type="submit">
            Registrar Venda
          </Button>
        </div>
      </form>
    </Form>
  );
}
