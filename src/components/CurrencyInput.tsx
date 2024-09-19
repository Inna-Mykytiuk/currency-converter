import React from 'react';

interface CurrencyInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ id, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 m-2"
      placeholder={placeholder}
    />
  );
};

export default CurrencyInput;
