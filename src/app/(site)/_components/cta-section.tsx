import { FullLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative">
      <span className="pointer-events-none z-10 absolute size-32 md:size-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-primary to-transparent blur-[100px] md:blur-[150px]"></span>

      <div
        className="container max-w-screen-xl space-y-5 py-16 z-20"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <FullLogo />

        <h2 className="text-[26px] md:max-w-[50%] leading-[32px] sm:text-3xl md:text-5xl md:leading-[60px] font-bold">
          Pronto para Proteger Seu Veículo?
        </h2>

        <h3 className="mt-4 text-foreground sm:max-w-lg sm:text-xl mb-8">
          Cadastre-se agora e garanta a segurança do seu patrimônio
        </h3>

        <p className="mt-4 text-muted-foreground max-w-[70%]">
          Não deixe para depois a segurança dos seus veículos. Entre em contato
          com a AppTrack e descubra como podemos ajudar a proteger o seu
          patrimônio e otimizar suas operações.
        </p>

        <div className="mt-16 flex items-center !space-x-4 z-10">
          <Link href={routesMap.register}>
            <Button className="rounded-full">
              Cadastre-se
              <ArrowRightIcon className="w-4 h-4 ml-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
