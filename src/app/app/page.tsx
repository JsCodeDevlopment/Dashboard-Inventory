import { redirect } from "next/navigation";
import { routesMap } from "@/constants/routes-map";

const AppPage = () => {
  redirect(routesMap.dashboard);
};
export default AppPage;
