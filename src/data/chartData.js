// src/data/chartData.js
export const generateStockChartData = (symbol, days = 30) => {
  const data = [];
  let price = 1000; // Starting price
  
  for (let i = 0; i < days; i++) {
    // Random price movement between -3% and +3%
    const change = (Math.random() - 0.5) * 6;
    price = price * (1 + change / 100);
    
    data.push({
      date: `Day ${i + 1}`,
      price: Math.round(price * 100) / 100,
      volume: Math.round(Math.random() * 1000000)
    });
  }
  
  return data;
};

export const generatePortfolioChartData = (months = 12) => {
  const data = [];
  let value = 1000000; // Starting portfolio value
  
  for (let i = 0; i < months; i++) {
    // Random monthly return between -5% and +8%
    const change = (Math.random() * 13) - 5;
    value = value * (1 + change / 100);
    
    data.push({
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i % 12],
      value: Math.round(value),
      return: change.toFixed(2)
    });
  }
  
  return data;
};