import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import React from "react";

const stats = [
  {
    title: "Colaboradores dedicados",
    value: "50",
    description:
      "Nossa equipe está sempre pronta para oferecer suporte e inovação.",
  },
  {
    title: "Pontos de atendimento",
    value: "129",
    description:
      "Estamos presentes em diversos locais para melhor atender você.",
  },
  {
    title: "Empresas usam AppTrack",
    value: "1.4K",
    description:
      "Nossa expertise comprovada pela confiança de grandes empresas.",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <div className="py-16 bg-secondary/30">
      <div className="container max-w-7xl">
        <div className="mb-12 flex flex-col items-center">
          <Badge variant="outline" className="mb-4">
            Nossos números
          </Badge>
          <h2 className="text-center text-3xl font-bold max-w-[460px] mb-2 text-foreground">
            Números que falam por nós
          </h2>
          <h3 className="text-center text-lg mb-4 text-foreground font-medium">
            Líder em segurança e eficiência no rastreio de veículos
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.title}
              className="px-6 py-8 z-20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-5xl font-extrabold text-foreground before:content-['+'] before:text-primary">
                {stat.value}
              </p>
              <h3 className="text-lg mt-2 leading-6 font-medium text-foreground">
                {stat.title}
              </h3>
              <p className="text-sm mt-4 text-site-muted">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
