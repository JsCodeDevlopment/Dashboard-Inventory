import {
  MainWrapper,
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
} from "@/components/layout/dashboard/main";

const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle>Cursos</MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default CoursesLayout;
