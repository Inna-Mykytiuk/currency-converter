import { useRates } from '../hooks/useRates';

export default function Header() {
  const { rates, isLoading } = useRates();

  if (isLoading) return <p>Loading...</p>;

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-xl">Current exchange rate:</h1>
      <p>1 UAH = USD: {rates.USD?.toFixed(4)}</p>
      <p>1 UAH = EUR: {rates.EUR?.toFixed(4)}</p>
    </header>
  );
}


