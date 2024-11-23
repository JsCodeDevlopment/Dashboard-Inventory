"use client";

import { Button } from "@/components/ui/button";
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
import { useProducts } from "@/domain/products/hooks/products.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  quantity: z.coerce.number(),
  value: z.coerce.number(),
  date: z.coerce.date().optional(),
});

interface AddMoreFormProps {
  productId: string;
}

export default function AddMoreForm({ productId }: AddMoreFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const {
    AddProductMutation: { mutate: AddProducts, isPending },
  } = useProducts();

  function onSubmit(values: z.infer<typeof formSchema>) {
    AddProducts({
      id: productId,
      quantity: values.quantity,
      price: values.value,
      purchaseDate: values.date ?? new Date(),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade adquirida</FormLabel>
                  <FormControl>
                    <RangeNumberInput
                      name={field.name}
                      min={1}
                      max={100}
                      step={1}
                      defaultValue={1}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor da compra</FormLabel>
                  <FormControl>
                    <CurrencyInput
                      value={field.value?.toString() ?? ""}
                      onChange={field.onChange}
                      placeholder="R$ 0,00"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date da compra</FormLabel>
              <Input
                type="date"
                value={
                  field.value ? field.value.toISOString().split("T")[0] : ""
                }
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
            </FormItem>
          )}
        />

        <div className="flex flex-1 justify-end">
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </Form>
  );
}
