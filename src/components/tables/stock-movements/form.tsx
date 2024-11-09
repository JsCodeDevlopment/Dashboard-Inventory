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
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";

type UnitEnum = keyof typeof UnitEnum;
const UnitEnum = {
  un: "un",
  cx: "cx",
  pct: "pct",
  kg: "kg",
} as const;

const formSchema = z.object({
  productId: z.string().min(1, "Produto é obrigatório"),
  quantity: z.string().transform((val) => +val),
  unit: z.nativeEnum(UnitEnum),
  saleValue: z.string().transform((val) => +val),
  saleDate: z
    .date()
    .nullable()
    .optional()
    .transform((val) => (val ? val.toISOString() : undefined)),
});

type FormValues = z.infer<typeof formSchema>;

interface RegisterSaleFormProps {
  products: { id: string; name: string }[];
}

export function RegisterSaleForm({ products }: RegisterSaleFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: "un",
      saleDate: new Date().toISOString(),
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    // handleSaleSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade Vendida</FormLabel>
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

          <FormField
            control={form.control}
            name="saleValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor da Venda</FormLabel>
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
            name="saleDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data da Venda</FormLabel>
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
                      <SelectValue placeholder="Selecione a unidade" />
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

        <div className="flex justify-end space-x-2">
          <DialogClose className={buttonVariants()} type="submit">
            Registrar Venda
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
