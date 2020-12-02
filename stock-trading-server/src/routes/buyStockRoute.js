import {
    getCurrentSharePrice,
    getUserInfo,
    buyStock,
} from '../db';

export const buyStockRoute = {
    method: 'post',
    path: '/stocks/buy',
    handler: async (req, res) => {
        const numberOfShares = Number(req.body.numberOfShares);
        const stockHistory = req.app.locals.stockHistory;
        const currentSharePrice = Number(await getCurrentSharePrice(stockHistory));
        const userInfo = await getUserInfo(stockHistory);
        const cashValue = Number(userInfo.cashValue);

        const cost = currentSharePrice * numberOfShares;
        if (cost > cashValue) {
            return res.status(400).json({ message: 'User\'s account balance is insufficient' })
        }

        await buyStock(numberOfShares, currentSharePrice);
        const updatedUserInfo = await getUserInfo(stockHistory);

        res.status(200).json(updatedUserInfo);
    },
};