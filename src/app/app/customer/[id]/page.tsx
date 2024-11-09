import { DataTableCustomer } from "@/components/tables/customer";

interface CustomerPageProps {
  params: {
    id: string;
  };
}

const CustomerPage = async ({ params: { id } }: CustomerPageProps) => {
  return (
    <div>
      <DataTableCustomer customerId={id} />
    </div>
  );
};

export default CustomerPage;
