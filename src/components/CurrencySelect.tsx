import React from 'react';

interface CurrencySelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ id, value, onChange, options }) => {
  return (
    <div className="flex">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 m-2"
        title="Select currency"
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
