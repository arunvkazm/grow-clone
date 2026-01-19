// src/data/portfolio.js
export const portfolioData = {
  totalInvestment: 1250000,
  currentValue: 1543200,
  holdings: [
    {
      id: 1,
      type: 'stock',
      symbol: 'RELIANCE',
      name: 'Reliance Industries',
      quantity: 50,
      avgCost: 2300,
      currentPrice: 2456.75,
      invested: 115000,
      currentValue: 122837.5,
      pnl: 7837.5
    },
    {
      id: 2,
      type: 'stock',
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      quantity: 30,
      avgCost: 3200,
      currentPrice: 3345.50,
      invested: 96000,
      currentValue: 100365,
      pnl: 4365
    },
    {
      id: 3,
      type: 'stock',
      symbol: 'HDFCBANK',
      name: 'HDFC Bank',
      quantity: 60,
      avgCost: 1550,
      currentPrice: 1678.90,
      invested: 93000,
      currentValue: 100734,
      pnl: 7734
    },
    {
      id: 1,
      type: 'mutualFund',
      symbol: 'SBIEQHYB',
      name: 'SBI Equity Hybrid Fund',
      quantity: 850.45,
      avgCost: 140.50,
      currentPrice: 145.67,
      invested: 119438.23,
      currentValue: 123875.45,
      pnl: 4437.22
    },
    {
      id: 2,
      type: 'mutualFund',
      symbol: 'ICICIBLU',
      name: 'ICICI Prudential Bluechip Fund',
      quantity: 220.75,
      avgCost: 550.25,
      currentPrice: 567.89,
      invested: 121443.94,
      currentValue: 125365.23,
      pnl: 3921.29
    }
  ],
  assetAllocation: [
    { name: 'Large Cap', value: 45 },
    { name: 'Mid Cap', value: 25 },
    { name: 'Small Cap', value: 15 },
    { name: 'Debt', value: 10 },
    { name: 'Cash', value: 5 }
  ],
  recentTransactions: [
    {
      id: 1,
      type: 'buy',
      asset: 'RELIANCE',
      quantity: 10,
      price: 2430,
      amount: 24300,
      date: '2024-05-15'
    },
    {
      id: 2,
      type: 'sip',
      asset: 'SBI Equity Hybrid Fund',
      quantity: 5000,
      price: 145.67,
      amount: 5000,
      date: '2024-05-10'
    },
    {
      id: 3,
      type: 'sell',
      asset: 'INFY',
      quantity: 5,
      price: 1480,
      amount: 7400,
      date: '2024-05-05'
    }
  ]
};