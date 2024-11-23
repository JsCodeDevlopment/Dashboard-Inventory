import { createProduct } from "@/domain/products/actions/create-products.action";
import { getProducts } from "@/domain/products/actions/list-products.action";
import { CreateProductProps } from "@/domain/products/types/create-products.type";
import { ListProductProps } from "@/domain/products/types/list-products.type";
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

  return { ListProductsQuery, CreateProductMutation };
}
