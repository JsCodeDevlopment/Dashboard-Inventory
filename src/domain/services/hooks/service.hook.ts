import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ListServiceProps } from "../types/service.type";
import { getServices } from "../actions/list-service.action";
import { AddServiceProps } from "../types/add-service.type";
import { addService } from "../actions/add-service.action";
import { toast } from "sonner";
import { UpdateServiceProps } from "../types/update-service.type";
import { updateService } from "../actions/update-service.action";
import { deleteService } from "../actions/delete-service.action";
import { DeleteServiceProps } from "../types/delete-service.type";
import { FinishServiceProps } from "../types/finish-service.type";
import { finishService } from "../actions/finish-service.action";

export function useServices({ clientName }: ListServiceProps = {}) {
  const queryClient = useQueryClient();

  const ListServicesQuery = useQuery({
    queryKey: ["/services", clientName],
    queryFn: async () => await getServices({ clientName }),
    refetchOnWindowFocus: false,
  });

  const CreateServiceMutation = useMutation({
    mutationFn: async (addServiceProps: AddServiceProps) => {
      await addService(addServiceProps);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/services"] });
      toast.success("Serviço criado com sucesso");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Erro ao criar serviço");
    },
  });

  const UpdateServiceMutation = useMutation({
    mutationFn: async (updateServiceProps: UpdateServiceProps) =>
      await updateService(updateServiceProps),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/services"] });
      toast.success("Serviço atualizado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao atualizar serviço");
    },
  });

  const DeleteServiceMutation = useMutation({
    mutationFn: async ({ serviceId }: DeleteServiceProps) =>
      await deleteService({
        serviceId,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/services"] });
      toast.success("Serviço deletado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao deletar produto");
    },
  });

  const FinishServiceMutation = useMutation({
    mutationFn: async ({ serviceId }: FinishServiceProps) =>
      await finishService({
        serviceId,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/services"] });
      toast.success("Serviço finalizado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao finalizar serviço");
    },
  });

  return {
    ListServicesQuery,
    CreateServiceMutation,
    UpdateServiceMutation,
    DeleteServiceMutation,
    FinishServiceMutation,
  };
}
