import { api } from "@/lib/axios/api";
import { Customer, ListCustomerProps } from "../types/customer.type";

export async function getCustomer({ id, name, contact }: ListCustomerProps) {
  const response = await api.get<Customer>(`/customer/param`, {
    params: { id, name, contact },
  });
  return response.data;
}
