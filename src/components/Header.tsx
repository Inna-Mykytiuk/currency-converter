import { useRates } from '../hooks/useRates';
import usdUah from '../assets/usd-flag.svg';
import euUah from '../assets/eur-flag.svg';

export default function Header() {
  const { rates, isLoading } = useRates();

  if (isLoading) return <p>Loading...</p>;

  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <h2>Current exchange rate:</h2>
          <div className='header-rates'>
            <div className='rate'>
              <img src={usdUah} alt="USD" width={30} height={30} />
              <p>
                USD/UAH:{(1 / rates.USD).toFixed(2)}
              </p>
            </div>
            <div className='rate'>
              <img src={euUah} alt="EUR" width={30} height={30} />
              <p>
                EUR/UAH:{(1 / rates.EUR).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


