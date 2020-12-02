import { createRefreshStockPricesTask } from './createRefreshStockPricesTask';

const SYMBOL = 'TSLA';

export { scheduleTask } from './scheduleTask';
export const tasks = [
    createRefreshStockPricesTask(SYMBOL),
];