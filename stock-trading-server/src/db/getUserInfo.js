import { getCurrentSharePrice } from './getCurrentSharePrice';
import { getUser } from './getUser';

export const getUserInfo = async (stockHistory) => {
    const currentSharePrice = await getCurrentSharePrice(stockHistory);
    const { cashValue, numberOfSharesOwned } = await getUser();
    const sharesValue = currentSharePrice * numberOfSharesOwned;

    return {
        cashValue,
        numberOfSharesOwned,
        sharesValue,
    };
}