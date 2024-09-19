import React from 'react';

interface CurrencyInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
  placeholder: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ id, value, onChange, ariaLabel, placeholder }) => {
  return (
    <div className="flex">
      <label htmlFor={id} className="sr-only">
        {ariaLabel}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 m-2"
        aria-label={ariaLabel}
        title={ariaLabel}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CurrencyInput;
