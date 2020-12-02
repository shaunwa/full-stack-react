import React, { useState } from 'react';
import { StockChart } from './StockChart';
import { useStockHistory } from '../stock-history';
import { useUserInfo } from '../user';

export const DashboardPage = () => {
    const [numberOfSharesValue, setNumberOfSharesValue] = useState(0);
    const [userInfo, setUserInfo] = useUserInfo();
    const { cashValue, sharesValue, numberOfSharesOwned } = userInfo || {};
    const stockHistory = useStockHistory();
    const prices = Object.values(stockHistory);

    const buyShares = async () => {
        const response = await fetch('/stocks/buy', {
            method: 'post',
            body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
            headers: { 'Content-Type': 'application/json' },
        });
        const updatedUserInfo = await response.json();
        setUserInfo(updatedUserInfo);
        alert(`Successfully bought ${numberOfSharesValue} shares of TSLA`);
        setNumberOfSharesValue(0);
    }

    const sellShares = async () => {
        const response = await fetch('/stocks/sell', {
            method: 'post',
            body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
            headers: { 'Content-Type': 'application/json' },
        });
        const updatedUserInfo = await response.json();
        setUserInfo(updatedUserInfo);
        alert(`Successfully sold ${numberOfSharesValue} shares of TSLA`);
        setNumberOfSharesValue(0);
    }

    return (
        <>
        <h1 className="section-heading">Stock Trading App</h1>
        {Object.keys(stockHistory).length > 0 ? (
            <div className="centered-container">
                <StockChart
                    xValues={Object.keys(stockHistory)}
                    yValues={Object.values(stockHistory)} />
                <div className="financial-info-section">
                    <div className="info-item">Current TSLA Share Price: ${prices[prices.length - 1]}</div>
                    <div className="info-item">You currently own {numberOfSharesOwned} shares</div>
                    <div className="info-item">Cash Balance: ${cashValue}</div>
                    <div className="info-item">Portfolio Value: ${sharesValue}</div>
                    <div className="info-item">Total Value: ${cashValue + sharesValue}</div>
                    <input
                        type="number"
                        value={numberOfSharesValue}
                        className="full-width space-after"
                        onChange={e => setNumberOfSharesValue(e.target.value)} />
                    <div>
                        <button className="buy-button" onClick={buyShares}>Buy</button>
                        <button className="sell-button" onClick={sellShares}>Sell</button>
                    </div>
                </div>
            </div>
        ) : <p>Loading...</p>}
        </>
    );
}