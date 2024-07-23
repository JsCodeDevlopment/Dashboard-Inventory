import { SettingsSidebar } from "@/app/app/settings/_components/sidebar";
import {
  MainContentHeader,
  MainContentTitle,
  MainContentWrapper,
  MainWrapper,
} from "@/components/layout/dashboard/main";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainWrapper>
      <MainContentHeader>
        <MainContentTitle>Configurações</MainContentTitle>
      </MainContentHeader>
      <MainContentWrapper>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-full lg:col-span-4 xl:col-span-3">
            <SettingsSidebar />
          </div>
          <div className="col-span-full lg:col-span-8 xl:col-span-9 flex">
            {children}
          </div>
        </div>
      </MainContentWrapper>
    </MainWrapper>
  );
};
export default SettingsLayout;
