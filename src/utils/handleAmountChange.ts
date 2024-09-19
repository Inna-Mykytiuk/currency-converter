import { Dispatch, SetStateAction } from 'react';
import { formatNumber } from "./formatNumber";

interface Rates {
  [key: string]: number;
}

export const handleAmountChange = (
  amount: string,
  sourceCurrency: string,
  targetCurrency: string,
  rates: Rates,
  setSourceAmount: Dispatch<SetStateAction<string>>,
  setTargetAmount: Dispatch<SetStateAction<string>>
) => {
  const parsedAmount = parseFloat(amount);
  if (!isNaN(parsedAmount)) {
    const calculatedAmount = (parsedAmount * rates[targetCurrency]) / rates[sourceCurrency];
    setTargetAmount(formatNumber(calculatedAmount).toString());
  } else {
    setTargetAmount('');
  }
  setSourceAmount(amount);
};
