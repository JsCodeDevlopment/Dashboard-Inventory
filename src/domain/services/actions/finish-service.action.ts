import { api } from "@/lib/axios/api";
import { Service } from "../types/service.type";
import { FinishServiceProps } from "../types/finish-service.type";

export async function finishService({ serviceId }: FinishServiceProps) {
  const response = await api.put<Service>(`/service/finish/${serviceId}`);
  return response.data;
}
