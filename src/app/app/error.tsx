"use client";

import {
	MainContentWrapper,
	MainWrapper,
} from "@/components/layout/dashboard/main";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainWrapper>
      <MainContentWrapper>
        <Card>
          <CardHeader>
            <CardTitle>Erro inesperado</CardTitle>
            <CardDescription>
              Pedimos desculpas, mas um erro inesperado ocorreu.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Tente novamente, caso o erro persistir entre em contato com o
              suporte técnico.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={reset}>Tentar novamente</Button>
          </CardFooter>
        </Card>
      </MainContentWrapper>
    </MainWrapper>
  );
}
