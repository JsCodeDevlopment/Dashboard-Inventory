import { getProducts } from "@/domain/products/actions/list-products.action";
import { ListProductProps } from "@/domain/products/types/list-products.type";
import { useQuery } from "@tanstack/react-query";

export function useListProducts({ name }: ListProductProps) {
  const {
    data: Products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/products", name],
    queryFn: async () => await getProducts({ name }),
    refetchOnWindowFocus: false,
  });

  return { Products, isLoading, refetch };
}
