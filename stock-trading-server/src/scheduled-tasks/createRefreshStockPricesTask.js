import { loadStockHistory } from './loadStockHistory';

export const createRefreshStockPricesTask = symbol => ({
    frequency: 300000,
    handler: async (app) => {
        try {
            console.log("Refreshing stock history data...");
            const updatedStockHistory = await loadStockHistory(symbol);
            app.locals.stockHistory = updatedStockHistory;
        } catch (e) {
            console.log("Unable to refresh stock history data:");
            console.log(e);
        }
    }
});
