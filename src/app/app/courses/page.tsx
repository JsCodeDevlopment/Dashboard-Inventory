import { NextPage } from "next";
import { DataTableCategories } from "@/components/tables/categories";

const CoursesPage: NextPage = () => {
  return (
    <div>
      <DataTableCategories />
    </div>
  );
};

export default CoursesPage;
