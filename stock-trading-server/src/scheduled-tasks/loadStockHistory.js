import fetch from 'node-fetch';

const ALPHA_API_KEY = '9EZQWEE7XPL4AJ8W';

export const loadStockHistory = async (symbol) => {
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY'
                 + `&symbol=${symbol}`
                 + '&interval=30min'
                 + `&outputsize=full`
                 + `&apikey=${ALPHA_API_KEY}`;
    const response = await fetch(apiUrl);
    const history = await response.json();
    return history;
}