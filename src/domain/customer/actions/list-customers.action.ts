import { api } from "@/lib/axios/api";
import { GetCustomer, ListCustomerProps } from "../types/customer.type";

export async function getCustomers({ id, name, contact }: ListCustomerProps) {
  const response = await api.get<GetCustomer[]>("/customer", {
    params: { name, contact, id },
  });
  return response.data;
}
