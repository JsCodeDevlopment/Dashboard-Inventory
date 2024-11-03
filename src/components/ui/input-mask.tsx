import React from 'react';

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'currency' | 'percentage';
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'currency',
}) => {
  const [displayValue, setDisplayValue] = React.useState(value);

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = (Number(numericValue) / 100).toLocaleString(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      },
    );
    return formattedValue;
  };

  const formatPercentage = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = (Number(numericValue) / 10).toFixed(1);
    return `% ${formattedValue}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    const cleanedValue = rawValue.replace(/[^0-9.,]/g, '');
    const numericalValue = parseFloat(cleanedValue.replace(',', '.'));

    if (type === 'currency') {
      setDisplayValue(formatCurrency(rawValue));
      onChange((numericalValue * 10).toFixed(2));
    } else if (type === 'percentage') {
      setDisplayValue(formatPercentage(rawValue));
      onChange(numericalValue.toString());
    }
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder || (type === 'currency' ? 'R$ 0,00' : '% 0.0')}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};

export default CurrencyInput;
