"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const faqs = [
  {
    title: "Como funciona o sistema de rastreamento da AppTrack?",
    content:
      "O sistema de rastreamento da AppTrack utiliza tecnologia GPS para monitorar a localização exata dos seus veículos em tempo real. Você pode acessar essas informações pelo computador ou pelo celular, visualizando a posição e o histórico de deslocamentos. Além disso, o sistema permite o bloqueio remoto do veículo em caso de tentativa de roubo, proporcionando maior segurança.",
  },
  {
    title: "A AppTrack oferece cobertura em todo o Brasil?",
    content:
      "Sim, a AppTrack oferece cobertura nacional, permitindo que você rastreie e monitore seus veículos em qualquer lugar do país. Não importa onde você esteja, você terá acesso às informações de localização e status dos seus veículos, garantindo segurança e controle total.",
  },
  {
    title: "Quais tipos de veículos podem ser rastreados pela AppTrack?",
    content:
      "O sistema de rastreamento da AppTrack pode ser instalado em qualquer tipo de veículo, incluindo carros, motos, caminhões e frotas empresariais, independentemente do ano ou modelo. Nosso dispositivo é instalado em um local estratégico para garantir o melhor desempenho.",
  },
  {
    title: "Como a AppTrack ajuda a reduzir custos na gestão de frotas?",
    content:
      "A AppTrack proporciona uma gestão eficiente da sua frota através de funcionalidades como monitoramento de combustível, controle de velocidade, gestão de multas e otimização de rotas. Com esses recursos, você pode reduzir despesas com combustíveis, manutenção e multas, além de aumentar a produtividade e a segurança dos seus veículos.",
  },
  {
    title: "O que acontece se meu veículo for roubado?",
    content:
      "Em caso de roubo, você pode utilizar o sistema da AppTrack para rastrear a localização exata do seu veículo em tempo real. Além disso, você pode ativar o bloqueio remoto para impedir que o veículo continue em movimento. Nossa central de atendimento está disponível 24 horas para fornecer suporte imediato e ajudar na recuperação do veículo.",
  },
  {
    title: "Como faço para acessar os dados do meu veículo?",
    content:
      "Você pode acessar os dados do seu veículo através da plataforma online da AppTrack, disponível tanto para computadores quanto para dispositivos móveis. Basta fazer login na sua conta para ter acesso à localização, histórico de deslocamentos, status do veículo e outras informações relevantes.",
  },
  {
    title: "Qual é o percentual de recuperação de veículos da AppTrack?",
    content:
      "A AppTrack tem um índice de recuperação de veículos de 100%, o que significa que todos os veículos rastreados que foram roubados foram recuperados. Nosso sistema avançado de rastreamento e a rápida resposta da nossa central de atendimento garantem a maior eficiência na recuperação de veículos.",
  },
  {
    title:
      "Quais são os planos e custos do sistema de rastreamento da AppTrack?",
    content:
      "A AppTrack oferece planos flexíveis para atender às suas necessidades específicas. Temos opções com e sem taxa de instalação, e você pode escolher entre diferentes níveis de serviço conforme o seu orçamento e os recursos desejados. Para mais detalhes sobre planos e preços, entre em contato conosco ou visite a nossa página de planos.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16">
      <div className="container max-w-screen-xl items-start">
        <header className="mb-12">
          <Badge variant="outline" className="mb-6">
            Possui dúvidas?
          </Badge>
          <h2 className="text-3xl font-bold md:max-w-[30%] mb-2">
            Perguntas Frequentes
          </h2>
          <h3 className="text-lg text-foreground mb-4">
            Esclareça suas dúvidas com nossas respostas rápidas
          </h3>
        </header>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.title}
              value={`item-${index}`}
              className="border border-border rounded-md bg-background"
              data-aos="fade-left"
              data-aos-delay={index * 50}
            >
              <AccordionTrigger className="text-left px-6">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 border-t border-border pt-4 text-md text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
