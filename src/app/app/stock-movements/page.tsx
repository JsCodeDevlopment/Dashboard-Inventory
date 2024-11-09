import { DataTableMovements } from "@/components/tables/stock-movements";
import { NextPage } from "next";

const StockMovementsPage: NextPage = () => {
  return (
    <div>
      <DataTableMovements />
    </div>
  );
};

export default StockMovementsPage;
