import * as React from "react";
import { cn } from "@/lib/tw-merge";
import { Rocket } from "lucide-react";

export const FullLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
        <Rocket className="size-7 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        DEV<span className="text-primary">LEARNING</span>
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
      <Rocket className="size-[70%] text-primary-foreground" />
    </div>
  );
};
