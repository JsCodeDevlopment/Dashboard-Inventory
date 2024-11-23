import { addProduct } from "@/domain/products/actions/add-products.action";
import { createProduct } from "@/domain/products/actions/create-products.action";
import { deleteProduct } from "@/domain/products/actions/delete-products.action";
import { getProducts } from "@/domain/products/actions/list-products.action";
import { updateProduct } from "@/domain/products/actions/update-products.action";
import { AddProductProps } from "@/domain/products/types/add-products.type";
import { CreateProductProps } from "@/domain/products/types/create-products.type";
import { DeleteProductProps } from "@/domain/products/types/delete-products.type";
import { ListProductProps } from "@/domain/products/types/list-products.type";
import { UpdateProductProps } from "@/domain/products/types/update-products.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useProducts({ name }: ListProductProps = {}) {
  const queryClient = useQueryClient();

  const ListProductsQuery = useQuery({
    queryKey: ["/products", name],
    queryFn: async () => await getProducts({ name }),
    refetchOnWindowFocus: false,
  });

  const CreateProductMutation = useMutation({
    mutationFn: async ({
      name,
      details,
      price,
      purchaseDate,
      quantity,
      unit,
    }: CreateProductProps) =>
      await createProduct({
        name,
        details,
        price,
        purchaseDate,
        quantity,
        unit,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/products"] });
      toast.success("Produto criado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao criar produto");
    },
  });

  const UpdateProductMutation = useMutation({
    mutationFn: async ({
      name,
      details,
      price,
      purchaseDate,
      quantity,
      unit,
      productId,
    }: UpdateProductProps) =>
      await updateProduct({
        productId,
        name,
        details,
        price,
        purchaseDate,
        quantity,
        unit,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/products"] });
      toast.success("Produto editado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao editar produto");
    },
  });

  const AddProductMutation = useMutation({
    mutationFn: async ({
      id,
      price,
      purchaseDate,
      quantity,
    }: AddProductProps) =>
      await addProduct({
        id,
        price,
        purchaseDate,
        quantity,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/products"] });
      toast.success("Novos produtos adicionados com sucesso");
    },
    onError: () => {
      toast.error("Erro ao adicionar mais produtos");
    },
  });

  const DeleteProductMutation = useMutation({
    mutationFn: async ({ productId }: DeleteProductProps) =>
      await deleteProduct({
        productId,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/products"] });
      toast.success("Produto deletado com sucesso");
    },
    onError: () => {
      toast.error("Erro ao deletar produto");
    },
  });

  return {
    ListProductsQuery,
    CreateProductMutation,
    DeleteProductMutation,
    UpdateProductMutation,
    AddProductMutation,
  };
}
