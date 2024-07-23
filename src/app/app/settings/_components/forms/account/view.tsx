"use client";

import { type AccountFormModel } from "@/app/app/settings/_components/forms/account/model";
import { MaskInput } from "@/components/mask-input";
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
import { cn } from "@/lib/tw-merge";
import { LoaderCircle, Pencil, PencilOff, UserCheck } from "lucide-react";

export const AccountFormView: React.FC<AccountFormModel> = ({
  form,
  isPending,
  isDisabledForm,
  isLoading,
  onSubmit,
  setIsDisabledForm,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 relative"
      >
        <Toggle
          onClick={() => setIsDisabledForm((prev) => !prev)}
          className="absolute right-0 -top-10"
        >
          {isDisabledForm && <Pencil className="size-4" />}
          {!isDisabledForm && <PencilOff className="size-4" />}
        </Toggle>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "after:text-red-600 after:content-['_*']",
                  field.disabled && "after:hidden"
                )}
              >
                Nome
              </FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "after:text-red-600 after:content-['_*']",
                  field.disabled && "after:hidden"
                )}
              >
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu melhor e-mail"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <MaskInput
                  type="tel"
                  onBlur={field.onBlur}
                  inputRef={field.ref}
                  disabled={field.disabled}
                  name={field.name}
                  value={field.value}
                  onAccept={field.onChange}
                  mask={[
                    {
                      mask: "(00) 0000-0000",
                    },
                    {
                      mask: "(00) 00000-0000",
                    },
                  ]}
                  placeholder="Seu telefone"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending || isDisabledForm}
          data-invisible={isDisabledForm}
          className="data-[invisible=true]:invisible flex items-center justify-center gap-2 px-4 text-sm font-bold text-primary-foreground shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>Salvar alterações</span>
          {!isPending && <UserCheck className="size-4" />}
          {isPending && <LoaderCircle className="size-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};
