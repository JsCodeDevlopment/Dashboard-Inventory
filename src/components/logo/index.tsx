import * as React from "react";
import { cn } from "@/lib/tw-merge";
import { MapPinned } from "lucide-react";

export const FullLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
        <MapPinned className="size-7 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        App<span className="text-primary">Track</span>
      </span>
    </div>
  );
};

export const MinimalLogo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-lg bg-primary",
        className
      )}
    >
      <MapPinned className="size-[70%] text-primary-foreground" />
    </div>
  );
};
