import {
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
  MainWrapper,
} from "@/components/layout/dashboard/main";
import { PackageMinus } from "lucide-react";

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle className="flex gap-3 items-center">
          <PackageMinus className="text-primary" /> Movimentações no Estoque
        </MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default CoursesLayout;
