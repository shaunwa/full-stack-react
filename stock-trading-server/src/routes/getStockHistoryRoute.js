import { getStockHistory } from '../db';

export const getStockHistoryRoute = {
    method: 'get',
    path: '/stock-history',
    handler: async (req, res) => {
        const stockHistory = req.app.locals.stockHistory;
        res.status(200).json(stockHistory);
    },
}