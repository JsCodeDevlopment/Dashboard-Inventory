"use client";

import { BenefitsSection } from "@/app/(site)/_components/benefits-section";
import { CasesSections } from "@/app/(site)/_components/cases-seciton";
import { CTASection } from "@/app/(site)/_components/cta-section";
import { FAQSection } from "@/app/(site)/_components/faq-section";
import { HeroSection } from "@/app/(site)/_components/hero/hero-section";
import { ServicesSection } from "@/app/(site)/_components/services-section";
import { StatsSection } from "@/app/(site)/_components/stats-section";
import { TestimonialsSection } from "@/app/(site)/_components/testimonials-section";
import { Separator } from "@/components/ui/separator";
import { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Site: NextPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <Separator className="bg-gradient-to-r from-transparent via-foreground to-transparent opacity-50" />
      <StatsSection />
      <BenefitsSection />
      <Separator className="bg-gradient-to-r from-transparent via-foreground to-transparent opacity-50" />
      <CasesSections />
      <TestimonialsSection />
      <Separator className="bg-gradient-to-r from-transparent via-foreground to-transparent opacity-50" />
      <FAQSection />
      <CTASection />
    </div>
  );
};
export default Site;
