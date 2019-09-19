import makeHttpRequest from './makeHttpRequest';

const computePrice = async ({
  type, margin, exchangeRate,
}) => {
  const { bpi: { USD } } = await makeHttpRequest({
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  });

  let calculatedPriceNaira = 0;

  switch (type) {
    case 'buy':
      calculatedPriceNaira = (USD.rate_float + USD.rate_float * (margin / 100)) * exchangeRate;
      break;
    case 'sell':
      calculatedPriceNaira = (USD.rate_float - USD.rate_float * (margin / 100)) * exchangeRate;
      break;
    default:
  }

  return calculatedPriceNaira;
};

export default computePrice;
