import React from "react";
import Link from "next/link";
import { FullLogo } from "@/components/logo";
import { routesMap } from "@/constants/routes-map";
import { NextPage } from "next";

const ForgotPasswordPage: NextPage = () => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg bg-background p-6 lg:w-96">
      <div>
        <FullLogo />
        <h2 className="mt-6 text-2xl font-bold text-foreground">
          Esqueceu sua senha?
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Entre em contato com o suporte para recuperar sua senha.
        </p>
        <p className="text-base text-muted-foreground mt-4">
          Voltar para{" "}
          <Link
            href={routesMap.login}
            className="rounded font-medium text-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
