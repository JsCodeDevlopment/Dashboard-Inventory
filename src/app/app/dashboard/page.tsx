import { BestSellers } from "@/app/app/dashboard/_components/best-sellers";
import { Occurrences } from "@/app/app/dashboard/_components/occurrences";
import { Stats } from "@/app/app/dashboard/_components/stats";
import { NextPage } from "next";

const DashboardPage: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        <div className="grid gap-6 col-span-full sm:col-span-3 xl:col-span-2">
          <Stats />
        </div>
        <div className="col-span-full sm:col-span-3 xl:col-span-2 ">
          <BestSellers />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Occurrences />
      </div>
    </>
  );
};
export default DashboardPage;
