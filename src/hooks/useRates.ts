import { useState, useEffect } from 'react';
import { fetchRates } from '../utils/fetchRates';

interface Rates {
  [key: string]: number;
}

export const useRates = () => {
  const [rates, setRates] = useState<Rates>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRates = async () => {
      try {
        const fetchedRates = await fetchRates();
        setRates(fetchedRates);
      } catch (error) {
        console.error('Error fetching exchange rates', error);
      } finally {
        setIsLoading(false);
      }
    };

    getRates();
  }, []);

  return { rates, isLoading };
};
