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
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";

type StatusEnum = keyof typeof StatusEnum;
const StatusEnum = {
  received: "received",
  waiting: "waiting",
  done: "done",
} as const;

const formSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  contact: z.string().min(1, "Contact is required"),
  device: z.string().min(1, "Device is required"),
  defect: z.string().min(1, "Defect is required"),
  receivedDate: z.string().min(1, "Received date is required"),
  deliveryDate: z.string().optional(),
  value: z.number().min(0, "Value must be a positive number"),
  status: z.nativeEnum(StatusEnum),
  advance: z.number().optional(),
  remainingValue: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface SaveServiceFormProps {
  data?: {
    id: string;
    clientName: string;
    contact: string;
    device: string;
    defect: string;
    receivedDate: string;
    deliveryDate: string;
    value: number;
    status: "received" | "waiting" | "done";
    advance: number;
    remainingValue: number;
  };
}

export function SaveServiceForm({ data: Services }: SaveServiceFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: Services?.clientName,
      contact: Services?.contact,
      device: Services?.device,
      defect: Services?.defect,
      receivedDate: Services?.receivedDate,
      deliveryDate: Services?.deliveryDate,
      value: Services?.value,
      status: Services?.status ?? "received",
      advance: Services?.advance,
      remainingValue: Services?.remainingValue,
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    // handleSubmitForm(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="clientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do cliente</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Adicione o nome do cliente" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contato</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Adicione o contato" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="device"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dispositivo</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Adicione o dispositivo" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="defect"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Defeito</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Adicione o defeito" />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="receivedDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data de recebimento</FormLabel>
                <Input type="date" {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data de entrega</FormLabel>
                <Input type="date" {...field} />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor</FormLabel>
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

          <FormField
            control={form.control}
            name="advance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adiantamento</FormLabel>
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

        <FormField
          control={form.control}
          name="remainingValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor restante</FormLabel>
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

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(StatusEnum).map(([key, value]) => (
                    <SelectItem key={key} value={value}>
                      {value === "received"
                        ? "Recebido"
                        : value === "waiting"
                        ? "Aguardando"
                        : "Concluído"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          <DialogClose className={buttonVariants()} type="submit">
            {Services ? "Atualizar serviço" : "Adicionar serviço"}
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
