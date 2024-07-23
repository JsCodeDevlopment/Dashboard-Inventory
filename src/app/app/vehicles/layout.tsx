import {
  MainWrapper,
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
} from "@/components/layout/dashboard/main";

const VehiclesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle>Veículos</MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>{children}</MainContentWrapper>
    </MainWrapper>
  );
};
export default VehiclesLayout;
