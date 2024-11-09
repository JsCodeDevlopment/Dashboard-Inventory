import {
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
  MainWrapper,
} from "@/components/layout/dashboard/main";
import { NotebookPen } from "lucide-react";

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle className="flex gap-3 items-center">
          <NotebookPen className="text-primary" /> Relatórios
        </MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default CoursesLayout;
