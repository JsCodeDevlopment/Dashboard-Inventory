import { api } from "@/lib/axios/api";
import { DeleteServiceProps } from "../types/delete-service.type";
import { Service } from "../types/service.type";

export async function deleteService({ serviceId }: DeleteServiceProps) {
  const response = await api.delete<Service>(`/service/${serviceId}`);
  return response.data;
}
