import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ListStockMovementProps } from "../types/list-stock.type";
import { getStockMovements } from "../actions/list-stock.action";
import { deleteStock } from "../actions/delete-stock.action";
import { toast } from "sonner";
import { addStock } from "../actions/add-stock.action";
import { AddStockProps } from "../types/add-stock.type";
import { UpdateStockProps } from "../types/update-stock.type";
import { updateStock } from "../actions/update-stock.action";
import { AxiosError } from "axios";
import { StockMutationError } from "../types/stock.type";

export function useStockMovement({
  productName,
  movementType,
}: ListStockMovementProps = {}) {
  const queryClient = useQueryClient();

  const ListStockQuery = useQuery({
    queryKey: ["/stock-movements", productName || movementType],
    queryFn: async () => await getStockMovements({ productName, movementType }),
    refetchOnWindowFocus: false,
  });

  const CreateStockMutation = useMutation({
    mutationFn: async (addStockProps: AddStockProps) => {
      await addStock(addStockProps);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/stock-movements"] });
      toast.success("Movimentação criada com sucesso");
    },
    onError: ({ response }: AxiosError<StockMutationError>) => {
      toast.error(response?.data.message || "Erro ao criar movimentação");
    },
  });

  const UpdateStockMutation = useMutation({
    mutationFn: async (updateStockProps: UpdateStockProps) =>
      await updateStock(updateStockProps),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/stock-movements"] });
      toast.success("Movimentação atualizada com sucesso");
    },
    onError: ({ response }: AxiosError<StockMutationError>) => {
      toast.error(response?.data.message || "Erro ao atualizar movimentação");
    },
  });

  const DeleteStockMutation = useMutation({
    mutationFn: async (movementId: string) => await deleteStock(movementId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/stock-movements"] });
      toast.success("Serviço deletado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao deletar produto");
    },
  });

  return {
    ListStockQuery,
    CreateStockMutation,
    UpdateStockMutation,
    DeleteStockMutation,
  };
}
