import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Clock,
  FileText,
  Fuel,
  Grid,
  Package,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const benefits = [
  {
    title: "Otimização nas Entregas",
    description:
      "Otimize suas rotas e reduza o tempo de entrega, aumentando ainda mais a sua produtividade",
    icon: Package,
  },
  {
    title: "Redução de Acidentes",
    description:
      "A vida do condutor em primeiro lugar e uma maior redução de custos para a sua empresa",
    icon: ShieldCheck,
  },
  {
    title: "Jornada de Condução",
    description:
      "Informações precisas para uma gestão eficiente dentro e fora do horário comercial",
    icon: Clock,
  },
  {
    title: "Controle de Combustível",
    description:
      "Economize em abastecimentos e melhore a média de consumo com uma gestão de frotas de alto nível",
    icon: Fuel,
  },
  {
    title: "Acesso Completo a Dados do Veículo",
    description:
      "Tenha informações detalhadas sobre o perfil de condução de cada motorista",
    icon: Grid,
  },
  {
    title: "Gestão Completa de Multas de Trânsito",
    description:
      "Receba e gerencie multas de trânsito de forma eficiente, evitando custos extras",
    icon: FileText,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <section id="benefits" className="py-16 relative bg-secondary/30">
        <span className="pointer-events-none z-10 absolute size-26 md:size-64 top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
        <span className="pointer-events-none z-10 absolute size-32 md:size-64 top-full left-full -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>
        <div className="container max-w-screen-xl">
          <header className="mb-12 flex flex-col items-center justify-center">
            <Badge variant="outline" className="mb-4">
              Benefícios
            </Badge>
            <h2 className="text-3xl font-bold md:max-w-[430px] mb-2 text-center">
              Por Que Escolher a AppTrack?
            </h2>
            <h3 className="text-lg text-foreground mb-4 text-center">
              Segurança, eficiência e economia para sua empresa
            </h3>
            <p className="opacity-80 text-base max-w-[730px] text-center">
              Descubra como a AppTrack pode transformar a gestão de sua frota
              com tecnologia de ponta e soluções personalizadas que garantem
              mais segurança e redução de custos.
            </p>
          </header>

          <main className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="px-6 py-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4" />

                <h4 className="mb-2 font-bold">{benefit.title}</h4>

                <p className="opacity-80 mb-4">{benefit.description}</p>
              </Card>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};
