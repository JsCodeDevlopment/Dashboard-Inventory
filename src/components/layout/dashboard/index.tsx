import React from "react";
import { cn } from "@/lib/tw-merge";

interface DashboardBaseProps<T> extends React.HTMLAttributes<T> {
  children?: React.ReactNode;
}

/**
 *  @example
 *
 * ```tsx
 * <DashboardRootLayout>
 *		<DashboardSidebarWrapper>
 *			<Sidebar />
 *		</DashboardSidebarWrapper>
 *		<DashboardBodyWrapper>
 *			<Header />
 *			<MainWrapper>
 *				<MainContentHeader>
 *					<MainContentTitle>Dashboard</MainContentTitle>
 *				</MainContentHeader>
 *				<MainContentWrapper>
 *					<div>MEU CONTEUDO</div>
 *				</MainContentWrapper>
 *			</MainWrapper>
 *		</DashboardBodyWrapper>
 *	</DashboardRootLayout>
 *	```
 */
export const DashboardRootLayout: React.FC<
  DashboardBaseProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn("min-h-screen w-full", className)}>
      {children}
    </div>
  );
};

export const DashboardSidebarWrapper: React.FC<
  DashboardBaseProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <aside
      {...props}
      className={cn(
        "hidden border-r bg-card md:block fixed top-0 left-0 bottom-0 w-[280px] z-50",
        className
      )}
    >
      {children}
    </aside>
  );
};

export const DashboardBodyWrapper: React.FC<
  DashboardBaseProps<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("flex flex-col md:ml-[280px] mt-[60px]", className)}
    >
      {children}
    </div>
  );
};
