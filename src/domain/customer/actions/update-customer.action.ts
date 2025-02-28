import { api } from "@/lib/axios/api";
import { Customer } from "../types/customer.type";
import { UpdateCustomerProps } from "../types/update-customer.type";

export async function updateCustomer(props: UpdateCustomerProps) {
  const { customerId, ...rest } = props;
  const response = await api.put<Customer>(`/customer/${customerId}`, {
    ...rest,
  });
  return response.data;
}
