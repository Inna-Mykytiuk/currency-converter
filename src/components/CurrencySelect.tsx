import React from 'react';

interface CurrencySelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  ariaLabel: string;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ id, value, onChange, options, ariaLabel }) => {
  return (
    <div className="flex">
      <label htmlFor={id} className="sr-only">
        {ariaLabel}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 m-2"
        aria-label={ariaLabel}
        title={ariaLabel}
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
