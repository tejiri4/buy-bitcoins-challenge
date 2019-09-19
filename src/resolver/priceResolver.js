// Throw error on wrong input
import { UserInputError } from 'apollo-server-express';
import computePrice from '../utils/computePrice';
import messages from '../utils/messages';

const calculatePrice = async (_, args) => {
  const { type, margin, exchangeRate } = args;

  if (margin <= 0 || margin >= 100) {
    throw new UserInputError(messages.wrongPercentage);
  }

  return computePrice({
    type, margin, exchangeRate,
  });
};

export default {
  Query: {
    calculatePrice,
  },
};
