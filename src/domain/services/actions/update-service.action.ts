import { api } from "@/lib/axios/api";
import { Service } from "../types/service.type";
import { UpdateServiceProps } from "../types/update-service.type";

export async function updateService(props: UpdateServiceProps) {
  const { serviceId, ...rest } = props;
  const response = await api.put<Service>(`/service/${serviceId}`, {
    ...rest,
  });
  return response.data;
}
