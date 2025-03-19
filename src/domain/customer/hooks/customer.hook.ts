import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCustomer } from "../actions/add-customer.action";
import { AddCustomerProps } from "../types/add-customer.type";
import { toast } from "sonner";
import { getCustomer } from "../actions/list-customer.action";
import {
  CustomerMutationError,
  ListCustomerProps,
} from "../types/customer.type";
import { getCustomers } from "../actions/list-customers.action";
import { AxiosError } from "axios";
import { DeleteCustomerProps } from "../types/delete-customer.type";
import { deleteCustomer } from "../actions/delete-customer.action";
import { UpdateCustomerProps } from "../types/update-customer.type";
import { updateCustomer } from "../actions/update-customer.action";

export function useCustomer({ id, name, contact }: ListCustomerProps = {}) {
  const queryClient = useQueryClient();

  const ListCustomers = useQuery({
    queryKey: ["/customer", name],
    queryFn: async () => await getCustomers({ name }),
    refetchOnWindowFocus: false,
  });

  const FindOneCustomer = useQuery({
    queryKey: ["/customer", id || name || contact],
    queryFn: async () => await getCustomer({ contact }),
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
  });

  const CreateCustomerMutation = useMutation({
    mutationFn: async (addCustomerProps: AddCustomerProps) =>
      await addCustomer(addCustomerProps),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/customer"] });
      toast.success("Cliente criado com sucesso");
    },
    onError: ({ response }: AxiosError<CustomerMutationError>) => {
      toast.error(response?.data.message || "Erro ao criar cliente");
    },
  });

  const UpdateCustomerMutation = useMutation({
    mutationFn: async (updateCustomerProps: UpdateCustomerProps) =>
      await updateCustomer(updateCustomerProps),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/customer"] });
      toast.success("Cliente atualizado com sucesso");
    },
    onError: ({ response }: AxiosError<CustomerMutationError>) => {
      toast.error(response?.data.message || "Erro ao atualizar cliente");
    },
  });

  const DeleteCustomerMutation = useMutation({
    mutationFn: async ({ customerId }: DeleteCustomerProps) =>
      await deleteCustomer({
        customerId,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/customer"] });
      toast.success("Cliente deletado com sucesso");
    },
    onError: ({ response }: AxiosError<CustomerMutationError>) => {
      toast.error(response?.data.message || "Erro ao deletar cliente");
    },
  });

  return {
    FindOneCustomer,
    CreateCustomerMutation,
    ListCustomers,
    DeleteCustomerMutation,
    UpdateCustomerMutation,
  };
}
