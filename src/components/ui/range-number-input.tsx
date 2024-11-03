import { cn } from "@/lib/tw-merge";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";

interface RangeNumberInputProps {
  name: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  defaultValue?: number;
}

/**
 * `RangeNumberInput` is a React functional component that provides a number input field with increment and decrement buttons.
 * It uses `react-hook-form` for form state management.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the input field, used for form state management.
 * @param {number} [props.min=0] - The minimum value allowed for the input field. Defaults to 0.
 * @param {number} [props.max=100] - The maximum value allowed for the input field. Defaults to 100.
 * @param {number} [props.step=1] - The step value for incrementing/decrementing the input field. Defaults to 1.
 * @param {string} [props.className] - Additional class names for styling the input field.
 * @param {number} [props.defaultValue=1] - The default value for the input field. Defaults to 1.
 *
 * @example
 * // Example usage of RangeNumberInput component
 * import React from 'react';
 * import { useForm, FormProvider } from 'react-hook-form';
 * import { RangeNumberInput } from './range-number-input';
 *
 * const MyForm = () => {
 *   const methods = useForm({
 *     defaultValues: {
 *       quantity: 1, // Set initial value to 1
 *     },
 *   });
 *
 *   const onSubmit = (data) => {
 *     console.log(data);
 *   };
 *
 *   return (
 *     <FormProvider {...methods}>
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <RangeNumberInput name="quantity" min={1} max={10} step={1} className="custom-class" defaultValue={5} />
 *         <button type="submit">Submit</button>
 *       </form>
 *     </FormProvider>
 *   );
 * };
 *
 * export default MyForm;
 */

const RangeNumberInput: React.FC<RangeNumberInputProps> = ({
  name,
  min = 0,
  max = 100,
  step = 1,
  className,
  defaultValue = 1,
}) => {
  const { control, setValue, getValues } = useFormContext();

  const handleDecrement = () => {
    const currentValue = parseFloat(getValues(name)) || defaultValue;
    setValue(name, Math.max(min, currentValue - step));
  };

  const handleIncrement = () => {
    const currentValue = parseFloat(getValues(name)) || defaultValue;
    setValue(name, Math.min(max, currentValue + step));
  };

  return (
    <div className="flex items-center space-x-2">
      <Button size="icon" type="button" onClick={handleDecrement}>
        <Minus className="h-4 w-4" />
      </Button>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            min={min}
            max={max}
            step={step}
            className={cn("w-12 text-center", className)}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                const numericValue =
                  value === "" ? defaultValue : parseFloat(value);
                field.onChange(numericValue);
              }
            }}
          />
        )}
      />
      <Button size="icon" type="button" onClick={handleIncrement}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export { RangeNumberInput };
