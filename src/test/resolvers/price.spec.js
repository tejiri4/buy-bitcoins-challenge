
import { expect, } from '../testHelpers/config';
import priceResolver from '../../resolver/priceResolver';
import messages from '../../utils/messages';

describe('Price resolver', () => {
  it('should return a calculated price when type buy is sent as argument', async () => {
    const args = {
      type: 'buy', margin: 0.2, exchangeRate: 362.73,
    };
    const res = await priceResolver.Query.calculatePrice(null, args);
    expect(res).to.be.a('number');
  });

  it('should return a calculated price when type sell is sent as argument', async () => {
    const args = {
      type: 'sell', margin: 0.2, exchangeRate: 362.73,
    };
    const res = await priceResolver.Query.calculatePrice(null, args);
    expect(res).to.be.a('number');
  });

  it('should validate a wrong percentage', async () => {
    const args = {
      type: 'sell', margin: -0.2, exchangeRate: 362.73,
    };
    try {
      await priceResolver.Query.calculatePrice(null, args);
    } catch (error) {
      expect(error.message).to.eql(messages.wrongPercentage)
    }
  });
});
