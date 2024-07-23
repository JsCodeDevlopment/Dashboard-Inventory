import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    title: "Transistor",
    img: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    title: "Mirage",
    img: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    title: "Tuple",
    img: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    title: "Laravel",
    img: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    title: "StaticKit",
    img: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    title: "Statamic",
    img: "https://tailwindui.com/img/logos/statamic-logo-gray-400.svg",
  },
];

export const CasesSections: React.FC = () => {
  return (
    <>
      <section id="cases" className="py-16">
        <div className="container max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div data-aos="fade-right">
              <Badge variant="outline" className="mb-4">
                Cases de sucesso
              </Badge>

              <h2 className="text-3xl font-bold mb-2">
                Empresas líderes confiam na AppTrack
              </h2>

              <p className="opacity-80 text-base">
                A AppTrack é a escolha preferida de empresas de renome em
                diversos setores. Elas confiam em nossa tecnologia para garantir
                a segurança e a eficiência de suas frotas. Conheça algumas das
                grandes marcas que fazem parte dessa jornada de sucesso.
              </p>

              <div className="mt-8">
                <Button asChild className="rounded-full font-semibold">
                  <Link href={routesMap.login}>
                    Teste Grátis
                    <ArrowRightIcon className="w-4 h-4 ml-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div
              className="mt-8 rounded-lg overflow-hidden grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 z-30"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {cases.map((item) => (
                <div
                  key={item.title}
                  className="col-span-1 flex justify-center py-8 px-8 bg-muted/70"
                >
                  <Image
                    height={48}
                    width={100}
                    className="max-h-12"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
