import { api } from "@/lib/axios/api";
import { Customer } from "../types/customer.type";
import { AddCustomerProps } from "../types/add-customer.type";

export async function addCustomer(data: AddCustomerProps) {
  const response = await api.post<Customer>("/customer", data);
  return response.data;
}
