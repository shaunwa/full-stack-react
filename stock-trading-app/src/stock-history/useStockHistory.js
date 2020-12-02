import { useState, useEffect } from 'react';

const zip = (keys, values) =>
    keys.reduce((acc, key, i) => ({
        ...acc,
        [key]: values[i],
    }), {})

export const useStockHistory = () => {
    const [stockHistory, setStockHistory] = useState([]);

    useEffect(() => {
        const loadStockHistory = async () => {
            const response = await fetch('/stock-history');
            const fullHistory = await response.json();

            const times = Object.keys(fullHistory['Time Series (30min)']);
            const priceSnapshots = Object.values(fullHistory['Time Series (30min)'])
                .map(snapshot => snapshot['4. close']);

            setStockHistory(zip(times, priceSnapshots));
        }

        loadStockHistory();
        const interval = setInterval(loadStockHistory, 300000);
        return () => clearInterval(interval);
    }, []);

    return stockHistory;
}