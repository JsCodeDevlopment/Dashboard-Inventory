"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Joana Marques",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "CEO, Workcation",
    text: "A AppTrack nos oferece dados em tempo real sobre nossos veículos, permitindo um monitoramento preciso dos gastos e uma otimização dos processos, o que resultou em uma significativa redução nos custos de manutenção.",
  },
  {
    name: "Marcos Almeida",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "CEO, Tuple",
    text: "Com o controle de velocidade, conseguimos reduzir o consumo médio dos veículos e minimizar os gastos com multas de trânsito. A AppTrack nos trouxe maior segurança, eficiência e otimização dos processos operacionais.",
  },
  {
    name: "Roberto Silva",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    company: "CEO, Mirage",
    text: "A AppTrack tem sido essencial para nossa operação, fornecendo dados valiosos que contribuem para uma gestão mais eficiente e econômica.",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container max-w-screen-xl">
        <div className="mb-2 flex flex-col items-center justify-center">
          <Badge variant="outline" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl font-bold mb-2 text-center">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground mb-4 text-center">
            Experiências reais de quem confia na AppTrack
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <div className="relative">
                  <blockquote className="mt-10">
                    <div className="max-w-3xl mx-auto text-center text-lg sm:text-xl leading-9 font-medium text-foreground">
                      <p>&ldquo;{testimonial.text}&rdquo;</p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-center justify-center gap-4">
                        <Avatar>
                          <AvatarFallback className="text-foreground">
                            {testimonial.name.slice(0, 2).toLocaleUpperCase()}
                          </AvatarFallback>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover object-center"
                          />
                        </Avatar>
                        <div className="flex flex-col justify-start">
                          <div className="text-base font-medium text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
