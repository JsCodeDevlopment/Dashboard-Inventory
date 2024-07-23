"use client";

import { type DeleteAccountFormModel } from "@/app/app/settings/_components/forms/delete-account/model";
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
import { LoaderCircle, UserRoundX } from "lucide-react";

export const DeleteAccountFormView: React.FC<DeleteAccountFormModel> = ({
  form,
  isPending,
  onSubmit,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excluir conta</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Digite a palavra 'excluir' para confirmar"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isPending}
          type="submit"
          variant="destructive"
          className="flex items-center justify-center gap-2 px-4 text-sm font-bold text-destructive-foreground shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>Excluir conta</span>
          {!isPending && <UserRoundX className="size-4" />}
          {isPending && <LoaderCircle className="size-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};
