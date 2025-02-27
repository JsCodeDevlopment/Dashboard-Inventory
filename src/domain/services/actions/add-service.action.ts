import { api } from "@/lib/axios/api";
import { Service } from "../types/service.type";
import { AddServiceProps } from "../types/add-service.type";

export async function addService(data: AddServiceProps) {
  const response = await api.post<Service>("/service", data);
  return response.data;
}
