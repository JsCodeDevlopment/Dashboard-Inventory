import { DataTableCustomers } from "@/components/tables/customers";

interface CustomerPageProps {
  params: {
    id: string;
  };
}

const CustomerPage = async ({ params: { id } }: CustomerPageProps) => {
  return (
    <div>
      <DataTableCustomers />
    </div>
  );
};

export default CustomerPage;
