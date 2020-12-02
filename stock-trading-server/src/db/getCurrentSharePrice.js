export const getCurrentSharePrice = async (stockHistory) => {
    const timeSeries = stockHistory["Time Series (30min)"];
    const priceObjects = Object.values(timeSeries);
    const mostRecentPriceObject = priceObjects[0];
    const currentPrice = Number(mostRecentPriceObject['4. close']);
    return currentPrice;
}