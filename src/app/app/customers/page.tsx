import { DataTableCustomers } from "@/components/tables/customers";
import { NextPage } from "next";

const CustomersPage: NextPage = () => {
  return (
    <div>
      <DataTableCustomers />
    </div>
  );
};

export default CustomersPage;
