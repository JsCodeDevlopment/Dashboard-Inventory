import React, { useState, useEffect } from "react";

interface CurrencyInputProps {
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (value !== "" && value !== null) {
      const numericValue = Number(value);
      setDisplayValue(
        numericValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/\D/g, "");
    if (!rawValue) {
      setDisplayValue("");
      onChange("0");
      return;
    }

    const numericValue = parseFloat(rawValue) / 100;
    setDisplayValue(
      numericValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );

    onChange(numericValue.toFixed(2));
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder || "R$ 0,00"}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};

export default CurrencyInput;
