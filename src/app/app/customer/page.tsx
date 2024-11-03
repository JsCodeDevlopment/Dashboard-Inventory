import { DataTableCustomer } from "@/components/tables/customer";
import { DataTableProducts } from "@/components/tables/products";
import { DataTableServices } from "@/components/tables/services";
import { NextPage } from "next";

const ServicesPage: NextPage = () => {
  return (
    <div>
      <DataTableCustomer />
    </div>
  );
};

export default ServicesPage;
