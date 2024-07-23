"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div>
          <div className="min-h-screen container flex items-center justify-center">
            <div className="flex justify-center items-center flex-col gap-8">
              <div>
                <h1 className="text-[150px] font-bold leading-none text-center">
                  500
                </h1>
                <h2 className="text-2xl font-bold text-center">
                  Erro interno!
                </h2>
                <p>
                  Houve um erro interno inesperado, tente novamente, caso o erro
                  persista entre em contato com o suporte técnico.
                </p>
              </div>
              <Button
                asChild
                className="text-primary-foreground font-semibold"
                onClick={reset}
              >
                Tentar novamente
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
