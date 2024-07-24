import { NextPage } from "next";
import { Occurrences } from "@/app/app/dashboard/_components/occurrences";
import { Stats } from "@/app/app/dashboard/_components/stats";
import { VehicleStatus } from "@/app/app/dashboard/_components/vehicle-status";

const DashboardPage: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        <div className="grid gap-6 col-span-full sm:col-span-3 xl:col-span-2">
          <Stats />
        </div>
        <div className="col-span-full sm:col-span-3 xl:col-span-2 ">
          <VehicleStatus />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Occurrences />
      </div>
    </>
  );
};
export default DashboardPage;
