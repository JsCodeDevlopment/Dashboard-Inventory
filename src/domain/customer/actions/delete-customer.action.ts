import { api } from "@/lib/axios/api";
import { DeleteCustomerProps } from "../types/delete-customer.type";

export async function deleteCustomer({ customerId }: DeleteCustomerProps) {
  const response = await api.delete(`/customer/${customerId}`);
  return response.data;
}
