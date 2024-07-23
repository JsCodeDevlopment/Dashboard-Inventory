import React from "react";
import { cn } from "@/lib/tw-merge";

interface ContentBaseProps<T> extends React.HTMLAttributes<T> {
  children?: React.ReactNode;
}

/**
 * @example
 *
 * ```tsx
 * <MainWrapper>
 * 	<MainContentHeader>
 * 		<MainContentTitle>Dashboard</MainContentTitle>
 * 	</MainContentHeader>
 * 	<MainContentWrapper>{children}</MainContentWrapper>
 * </MainWrapper>
 *	```
 */
export const MainWrapper: React.FC<ContentBaseProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main
      className={cn(
        "flex flex-1 container flex-col gap-4 lg:gap-6 py-6 lg:py-8",
        className
      )}
    >
      {children}
    </main>
  );
};

export const MainContentWrapper: React.FC<ContentBaseProps<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("flex-1 flex flex-col gap-6", props.className)}
      x-chunk="dashboard-chunk-1"
    >
      {children}
    </div>
  );
};

export const MainContentHeader: React.FC<ContentBaseProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("flex items-center", className)}>
      {children}
    </div>
  );
};

export const MainContentTitle: React.FC<
  ContentBaseProps<HTMLHeadingElement>
> = ({ children, className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn("text-lg font-semibold md:text-2xl", className)}
    >
      {children}
    </h1>
  );
};
