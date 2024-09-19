import axios from 'axios';

export const fetchRates = async () => {
  try {
    const { data } = await axios.get('https://api.exchangerate-api.com/v4/latest/UAH');
    return data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates', error);
    return {};
  }
};