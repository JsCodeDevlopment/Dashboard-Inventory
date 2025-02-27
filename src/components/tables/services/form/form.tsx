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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCustomer } from "@/domain/customer/hooks/customer.hook";
import { useServices } from "@/domain/services/hooks/service.hook";
import { useUser } from "@/hooks/use-user";
import { DateFormatter } from "@/services/common/formatDate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormValues, SaveServiceFormProps } from "./form.type";
import { formSchema, StatusEnum } from "./form.schema";
import { useEffect } from "react";

export function SaveServiceForm({ data: service }: SaveServiceFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: service?.clientName ?? "",
      contact: service?.contact ?? "",
      device: service?.device ?? "",
      defect: service?.defect ?? "",
      receivedAt: service?.receivedAt ?? undefined,
      deliveryDate: service?.deliveryDate ?? undefined,
      value: service?.value ?? undefined,
      advanceValue: service?.advanceValue ?? null,
      remainingValue: service?.remainingValue ?? null,
      status: service?.status ?? "RECEIVED",
    },
  });

  const {
    CreateServiceMutation: { mutate: createService },
    UpdateServiceMutation: { mutate: updateService },
  } = useServices();

  const { user } = useUser();
  const { ListCustomerByContactQuery } = useCustomer({
    contact: form.getValues("contact"),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(1);
    const { data: customer } = await ListCustomerByContactQuery.refetch();

    if (!customer) {
      toast.error("Cliente não encontrado");
      return;
    }

    if (!user) {
      toast.error("Usuário não encontrado");
      return;
    }

    const { clientName, contact, ...serviceData } = data;

    if (service) {
      updateService({ serviceId: service.id, ...serviceData });
    } else {
      createService({
        customerId: customer.id,
        userId: user.id,
        ...serviceData,
      });
    }
  };

  useEffect(() => {
    if (service) {
      form.reset(service);
    }
  }, [service]);

  return (
    <Form {...form}>
      <form
        className="space-y-4 overflow-y-auto max-h-screen"
        autoComplete="off"
      >
        {!service ? (
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Nome do cliente</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Adicione o nome do cliente"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Contato</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Adicione o contato" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        ) : null}

        <FormField
          control={form.control}
          name="device"
          render={({ field }) => (
            <FormItem className="w-full">
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
            <FormItem className="w-full">
              <FormLabel>Defeito</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Adicione o defeito" />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <FormField
            control={form.control}
            name="receivedAt"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2 flex flex-col">
                <FormLabel>Data de recebimento</FormLabel>
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
            name="deliveryDate"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2 flex flex-col">
                <FormLabel>Data de entrega</FormLabel>
                <Input
                  type="date"
                  {...field}
                  value={DateFormatter.formatUsDate(field.value) ?? ""}
                />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Valor</FormLabel>
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

          <FormField
            control={form.control}
            name="advanceValue"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Adiantamento</FormLabel>
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

        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <FormField
            control={form.control}
            name="remainingValue"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
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
              <FormItem className="w-full md:w-1/2">
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
                        {value === "RECEIVED"
                          ? "Recebido"
                          : value === "IN_PROGRES"
                          ? "Aguardando"
                          : "Concluído"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className={buttonVariants()}
            type="submit"
          >
            {service ? "Atualizar serviço" : "Adicionar serviço"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
