import { api } from "@/lib/axios/api";
import { GetService, ListServiceProps } from "../types/service.type";

export async function getServices({ clientName }: ListServiceProps) {
  const response = await api.get<GetService[]>("/service", {
    params: { clientName },
  });
  return response.data;
}
