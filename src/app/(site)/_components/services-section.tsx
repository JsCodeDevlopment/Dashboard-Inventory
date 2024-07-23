import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Headset, LandPlot, MapPin, Radar } from "lucide-react";

const services = [
  {
    title: "Central 24Hrs",
    description: "Atendimento humanizado, pronto para te atender",
    icon: Headset,
  },
  {
    title: "Rastreador e Bloqueador",
    description: "Mantenha seu carro seguro o tempo todo",
    icon: Radar,
  },
  {
    title: "Cobertura Nacional",
    description: "Seu veículo seguro em qualquer lugar do país",
    icon: LandPlot,
  },
  {
    title: "Localização exata",
    description: "Em ruas, matas, ou galpões, não importa. Nós encontramos",
    icon: MapPin,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container max-w-screen-xl">
        <div
          className="mb-12 flex flex-col justify-center items-center md:items-start"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Badge variant="outline" className="mb-4">
            Nossos serviços
          </Badge>

          <h2 className="text-3xl font-bold max-w-[400px] md:max-w-[50%] lg:max-w-[40%] mb-2 text text-foreground text-center md:text-start">
            Soluções completas para a segurança do seu veículo
          </h2>
          <h3 className="text-lg mb-4 font-semibold text-foreground text-center md:text-start">
            Tudo o que você precisa em um só lugar
          </h3>

          <p className="opacity-80 text-base max-w-[500px] md:max-w-[80%] lg:max-w-[70%] text-foreground text-center md:text-start">
            Oferecemos uma ampla gama de serviços para garantir que seus
            veículos estejam sempre protegidos e monitorados. Descubra nossas
            soluções e escolha a que melhor se adapta às suas necessidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="px-6 py-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="mb-2 font-bold">{service.title}</h4>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
