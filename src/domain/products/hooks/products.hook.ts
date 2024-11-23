import { getProducts } from "@/domain/products/actions/list-products.action";
import { ListProductProps } from "@/domain/products/types/list-products.type";
import { useQuery } from "@tanstack/react-query";

export function useProducts({ name }: ListProductProps) {
  const ListProductsQuery = useQuery({
    queryKey: ["/products", name],
    queryFn: async () => await getProducts({ name }),
    refetchOnWindowFocus: false,
  });

  return { ListProductsQuery };
}
