import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Category } from "@/components/tables/categories/";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ISaveCategoryFormProps {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  isClosed: boolean;
  category?: Category;
}

const saveCategorySchema = z.object({
  _id: z.string().optional(),
  icon: z.string(),
  name: z.string().min(4, "Insira no mínimo 4 caracteres."),
});

type saveCategorySchema = z.infer<typeof saveCategorySchema>;

export function SaveCategoryForm({
  setIsClosed,
  isClosed,
  category,
}: ISaveCategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<saveCategorySchema>({
    resolver: zodResolver(saveCategorySchema),
    defaultValues: {
      name: category?.name ?? "",
    },
  });

  const handleSave = async (data: saveCategorySchema) => {
    if (category) {
      const changeCategory = {
        id: category.id,
        name: data.name,
      };
      reset();
    } else {
      if (data.icon === "" || data.name === "") {
        return;
      }
      reset();
    }
    setIsClosed(true);
  };

  return (
    <>
      {isClosed && (
        <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md shadow-lg w-96">
          <h1 className="text-lg font-semibold text-base-content">
            {category ? `Editar Categoria ${category.name}` : "Criar Categoria"}
          </h1>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(handleSave)}
          >
            <div className="flex w-full items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name da categoria</span>
                </div>
                <Input
                  type="text"
                  {...register("name")}
                  placeholder="Ex.: UX/UI Design"
                  className="w-full"
                />
                {errors.name && (
                  <span className="text-error">{errors.name.message}</span>
                )}
              </label>
            </div>
            <Button type="submit" variant="default" size="sm">
              Salvar
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
