import { DataTableProducts } from "@/components/tables/products";
import { NextPage } from "next";

const ProductsPage: NextPage = () => {
  return (
    <div>
      <DataTableProducts />
    </div>
  );
};

export default ProductsPage;
