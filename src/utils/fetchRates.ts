export const fetchRates = async () => {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/UAH');
    const data = await response.json();

    return data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates', error);
    return {};
  }
};