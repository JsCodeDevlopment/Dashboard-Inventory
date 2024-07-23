"use client";

import { HeroDotsHighlight } from "@/app/(site)/_components/hero/hero-dots-highlight";
import { HeroScroll } from "@/app/(site)/_components/hero/hero-scroll";

export const HeroSection: React.FC = () => {
  return (
    <HeroDotsHighlight className="relative min-h-screen text-center">
      <span className="pointer-events-none z-10 absolute size-32 md:size-64 top-20 right-20 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
      <span className="pointer-events-none z-10 absolute size-32 md:size-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
      <span className="pointer-events-none z-10 absolute size-32 md:size-64 top-1/2 left-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
      <div className="container z-50 relative">
        <HeroScroll />
      </div>
    </HeroDotsHighlight>
  );
};
