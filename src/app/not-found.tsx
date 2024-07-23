import { Button } from "@/components/ui/button";
import { routesMap } from "@/constants/routes-map";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="min-h-screen container flex items-center justify-center">
        <div className="flex justify-center items-center flex-col gap-8">
          <div>
            <h1 className="text-[150px] font-bold leading-none text-center">
              404
            </h1>
            <h2 className="text-2xl font-bold text-center">
              Página não encontrada!
            </h2>
          </div>
          <Button asChild className="text-primary-foreground font-semibold">
            <Link href={routesMap.home}>Voltar para Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
