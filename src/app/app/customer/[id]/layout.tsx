import {
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
  MainWrapper,
} from "@/components/layout/dashboard/main";
import { BriefcaseBusiness, Package, User } from "lucide-react";

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle className="flex gap-3 items-center">
          <User className="text-primary" /> Cliente
        </MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default CoursesLayout;
