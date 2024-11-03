import { DataTableProducts } from "@/components/tables/products";
import { DataTableServices } from "@/components/tables/services";
import { NextPage } from "next";

const ServicesPage: NextPage = () => {
  return (
    <div>
      <DataTableServices />
    </div>
  );
};

export default ServicesPage;
