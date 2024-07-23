"use client";

import { type PasswordFormModel } from "@/app/app/settings/_components/forms/password/model";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Eye, EyeOff, KeyRound, LoaderCircle } from "lucide-react";

export const PasswordFormView: React.FC<PasswordFormModel> = ({
  form,
  isPending,
  isVisiblePasswords,
  onSubmit,
  setIsVisiblePasswords,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:text-red-600 after:content-['_*']">
                Senha atual
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    tabIndex={1}
                    placeholder="Digite sua senha atual"
                    {...field}
                    type={isVisiblePasswords.password ? "text" : "password"}
                  />
                </FormControl>
                <Toggle
                  onClick={() =>
                    setIsVisiblePasswords((prev) => ({
                      ...prev,
                      password: !prev.password,
                    }))
                  }
                  className="absolute right-0 top-1/2 h-full -translate-y-1/2"
                >
                  {!isVisiblePasswords.password && (
                    <Eye className="size-5 text-muted-foreground" />
                  )}
                  {isVisiblePasswords.password && (
                    <EyeOff className="size-5 text-muted-foreground" />
                  )}
                </Toggle>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:text-red-600 after:content-['_*']">
                Nova senha
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    tabIndex={2}
                    placeholder="Digite sua nova senha"
                    {...field}
                    type={isVisiblePasswords.newPassword ? "text" : "password"}
                  />
                </FormControl>
                <Toggle
                  onClick={() =>
                    setIsVisiblePasswords((prev) => ({
                      ...prev,
                      newPassword: !prev.newPassword,
                    }))
                  }
                  className="absolute right-0 top-1/2 h-full -translate-y-1/2"
                >
                  {!isVisiblePasswords.newPassword && (
                    <Eye className="size-5 text-muted-foreground" />
                  )}
                  {isVisiblePasswords.newPassword && (
                    <EyeOff className="size-5 text-muted-foreground" />
                  )}
                </Toggle>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="after:text-red-600 after:content-['_*']">
                Confirme a nova senha
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    tabIndex={3}
                    placeholder="Confirme sua nova senha"
                    {...field}
                    type={
                      isVisiblePasswords.confirmNewPassword
                        ? "text"
                        : "password"
                    }
                  />
                </FormControl>
                <Toggle
                  onClick={() =>
                    setIsVisiblePasswords((prev) => ({
                      ...prev,
                      confirmNewPassword: !prev.confirmNewPassword,
                    }))
                  }
                  className="absolute right-0 top-1/2 h-full -translate-y-1/2"
                >
                  {!isVisiblePasswords.confirmNewPassword && (
                    <Eye className="size-5 text-muted-foreground" />
                  )}
                  {isVisiblePasswords.confirmNewPassword && (
                    <EyeOff className="size-5 text-muted-foreground" />
                  )}
                </Toggle>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          tabIndex={4}
          disabled={isPending}
          className="flex  items-center justify-center gap-2 px-4 text-sm font-bold text-primary-foreground shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>Alterar senha</span>
          {!isPending && <KeyRound className="size-4" />}
          {isPending && <LoaderCircle className="size-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};
