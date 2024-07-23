import {
  MainWrapper,
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
} from "@/components/layout/dashboard/main";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle>Dashboard</MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default DashboardLayout;
