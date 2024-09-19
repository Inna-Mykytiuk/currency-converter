import { useRates } from '../hooks/useRates';

export default function Header() {
  const { rates, isLoading } = useRates();

  if (isLoading) return <p>Loading...</p>;

  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <h2 className="">Current exchange rate:</h2>
          <div className='header-rates'>
            <p>1 UAH = {rates.USD?.toFixed(4)} USD</p>
            <p>1 UAH =  {rates.EUR?.toFixed(4)} EUR</p>
          </div>
        </div>
      </div>
    </header>
  );
}


