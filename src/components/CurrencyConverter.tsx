import { useState } from 'react';

import { useRates } from '../hooks/useRates';
import { handleAmountChange } from '../utils/handleAmountChange';

import CurrencyInput from './CurrencyInput';
import CurrencySelect from './CurrencySelect';

export default function CurrencyConverter() {
  const { rates, isLoading } = useRates();
  const [firstAmount, setFirstAmount] = useState<string>('');
  const [secondAmount, setSecondAmount] = useState<string>('');
  const [firstCurrency, setFirstCurrency] = useState<string>('UAH');
  const [secondCurrency, setSecondCurrency] = useState<string>('USD');

  if (isLoading) return <p>Loading...</p>;

  const handleFirstAmountChange = (amount: string) => {
    handleAmountChange(amount, firstCurrency, secondCurrency, rates, setFirstAmount, setSecondAmount);
  };

  const handleSecondAmountChange = (amount: string) => {
    handleAmountChange(amount, secondCurrency, firstCurrency, rates, setSecondAmount, setFirstAmount);
  };

  const handleCurrency1Change = (currency: string) => {
    if (firstAmount) {
      handleAmountChange(firstAmount, currency, secondCurrency, rates, setFirstAmount, setSecondAmount);
    }
    setFirstCurrency(currency);
  };

  const handleCurrency2Change = (currency: string) => {
    if (secondAmount) {
      handleAmountChange(secondAmount, currency, firstCurrency, rates, setSecondAmount, setFirstAmount);
    }
    setSecondCurrency(currency);
  };

  return (
    <div className="flex flex-col items-center">
      <CurrencyInput
        id="amount1"
        value={firstAmount}
        onChange={handleFirstAmountChange}
        ariaLabel="Amount for the first currency"
        placeholder="Enter amount"
      />
      <CurrencySelect
        id="currency1"
        value={firstCurrency}
        onChange={handleCurrency1Change}
        options={Object.keys(rates)}
        ariaLabel="First currency"
      />
      <CurrencyInput
        id="amount2"
        value={secondAmount}
        onChange={handleSecondAmountChange}
        ariaLabel="Amount for the second currency"
        placeholder="Enter amount"
      />
      <CurrencySelect
        id="currency2"
        value={secondCurrency}
        onChange={handleCurrency2Change}
        options={Object.keys(rates)}
        ariaLabel="Second currency"
      />
    </div>
  );
}
