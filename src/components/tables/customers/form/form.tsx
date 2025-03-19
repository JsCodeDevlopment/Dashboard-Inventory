import { buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormValues, SaveCustomerFormProps } from "./form.types";
import { formSchema } from "./form.schema";
import { useCustomer } from "@/domain/customer/hooks/customer.hook";
import { DialogClose } from "@/components/ui/dialog-ui";
import { useEffect } from "react";

export function SaveCustomerForm({ data: customer }: SaveCustomerFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: customer?.name ?? "",
      contact: customer?.contact ?? "",
    },
  });

  const {
    CreateCustomerMutation: { mutate: createCustomer },
    UpdateCustomerMutation: { mutate: updateCustomer },
  } = useCustomer();
  const onSubmit = (data: FormValues) => {
    if (customer) {
      updateCustomer({ customerId: customer.id, ...data });
    } else {
      createCustomer(data);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4">
        <div className="flex gap-5 justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
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
        <div className="flex justify-end space-x-2">
          <DialogClose
            onClick={form.handleSubmit(onSubmit)}
            className={buttonVariants()}
            type="submit"
          >
            {customer ? "Atualizar cliente" : "Adicionar cliente"}
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
