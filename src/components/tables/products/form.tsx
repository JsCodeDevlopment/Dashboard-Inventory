import { buttonVariants } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@/domain/products/types/list-products.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type UnitEnum = keyof typeof UnitEnum;
export const UnitEnum = {
  UN: "UN",
  CX: "CX",
  PCT: "PCT",
  KG: "KG",
} as const;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  value: z.string().transform((val) => +val),
  date: z
    .date()
    .nullable()
    .optional()
    .transform((val) => (val ? val.toISOString() : undefined)),
  unit: z.nativeEnum(UnitEnum),
  quantity: z.string().transform((val) => +val),
  details: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface SaveProductFormProps {
  data?: Product;
}

export function SaveProductForm({ data: Products }: SaveProductFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: Products?.name,
      value: Products?.price,
      date: Products?.purchaseDate.toISOString(),
      unit: Products?.unit,
      quantity: Products?.quantity,
      details: Products?.details,
    },
  });

  const { watch, handleSubmit } = form;
  const date = watch("date");

  const onSubmit = (data: FormValues) => {
    // handleSubmitForm(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do produto</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Adicione o nome do produto" />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-5 justify-between">
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

        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date da compra</FormLabel>
                <Input type="date" {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unidade</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecine a unidade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(UnitEnum).map(([key, value]) => (
                      <SelectItem key={key} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhes do produto</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Adicione os detalhes do produto"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          <DialogClose className={buttonVariants()} type="submit">
            {Products ? "Atualizar produto" : "Adicionar produto"}
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
