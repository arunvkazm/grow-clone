// src/data/portfolio.js
export const portfolioData = {
  totalInvestment: 10000000000, // ₹1000 Cr invested
  currentValue: 150000000, // ₹15 Cr current value
  holdings: [
    {
      id: 1,
      type: 'stock',
      symbol: 'RELIANCE',
      name: 'Reliance Industries',
      quantity: 500000,
      avgCost: 2300,
      currentPrice: 2456.75,
      invested: 1150000000, // ₹115 Cr
      currentValue: 1228375000, // ₹122.84 Cr
      pnl: 78375000 // ₹7.84 Cr
    },
    {
      id: 2,
      type: 'stock',
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      quantity: 300000,
      avgCost: 3200,
      currentPrice: 3345.50,
      invested: 960000000, // ₹96 Cr
      currentValue: 1003650000, // ₹100.37 Cr
      pnl: 43650000 // ₹4.37 Cr
    },
    {
      id: 3,
      type: 'stock',
      symbol: 'HDFCBANK',
      name: 'HDFC Bank',
      quantity: 600000,
      avgCost: 1550,
      currentPrice: 1678.90,
      invested: 930000000, // ₹93 Cr
      currentValue: 1007340000, // ₹100.73 Cr
      pnl: 77340000 // ₹7.73 Cr
    },
    {
      id: 4,
      type: 'stock',
      symbol: 'INFY',
      name: 'Infosys',
      quantity: 400000,
      avgCost: 1400,
      currentPrice: 1456.25,
      invested: 560000000, // ₹56 Cr
      currentValue: 582500000, // ₹58.25 Cr
      pnl: 22500000 // ₹2.25 Cr
    },
    {
      id: 5,
      type: 'stock',
      symbol: 'ICICIBANK',
      name: 'ICICI Bank',
      quantity: 800000,
      avgCost: 950,
      currentPrice: 987.65,
      invested: 760000000, // ₹76 Cr
      currentValue: 790120000, // ₹79.01 Cr
      pnl: 30120000 // ₹3.01 Cr
    },
    {
      id: 6,
      type: 'stock',
      symbol: 'BHARTIARTL',
      name: 'Bharti Airtel',
      quantity: 1000000,
      avgCost: 820,
      currentPrice: 856.40,
      invested: 820000000, // ₹82 Cr
      currentValue: 856400000, // ₹85.64 Cr
      pnl: 36400000 // ₹3.64 Cr
    },
    {
      id: 7,
      type: 'mutualFund',
      symbol: 'SBIEQHYB',
      name: 'SBI Equity Hybrid Fund',
      quantity: 8504500,
      avgCost: 140.50,
      currentPrice: 145.67,
      invested: 1194382300, // ₹119.44 Cr
      currentValue: 1238754500, // ₹123.88 Cr
      pnl: 44372200 // ₹4.44 Cr
    },
    {
      id: 8,
      type: 'mutualFund',
      symbol: 'ICICIBLU',
      name: 'ICICI Prudential Bluechip Fund',
      quantity: 2207500,
      avgCost: 550.25,
      currentPrice: 567.89,
      invested: 1214439400, // ₹121.44 Cr
      currentValue: 1253652300, // ₹125.37 Cr
      pnl: 39212900 // ₹3.92 Cr
    },
    {
      id: 9,
      type: 'mutualFund',
      symbol: 'HDFCEQUITY',
      name: 'HDFC Equity Fund',
      quantity: 5002500,
      avgCost: 280.50,
      currentPrice: 295.75,
      invested: 1402502500, // ₹140.25 Cr
      currentValue: 1479489400, // ₹147.95 Cr
      pnl: 76986900 // ₹7.70 Cr
    },
    {
      id: 10,
      type: 'mutualFund',
      symbol: 'AXISBLUE',
      name: 'Axis Bluechip Fund',
      quantity: 3505000,
      avgCost: 420.25,
      currentPrice: 445.50,
      invested: 1472976300, // ₹147.30 Cr
      currentValue: 1561972500, // ₹156.20 Cr
      pnl: 88996200 // ₹8.90 Cr
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
      date: '2024-06-10',
      time: '10:30 AM'
    },
    {
      id: 2,
      type: 'sip',
      asset: 'SBI Equity Hybrid Fund',
      quantity: 5000,
      price: 145.67,
      amount: 5000,
      date: '2024-06-08',
      time: '9:00 AM'
    },
    {
      id: 3,
      type: 'sell',
      asset: 'INFY',
      quantity: 5,
      price: 1480,
      amount: 7400,
      date: '2024-06-05',
      time: '2:45 PM'
    },
    {
      id: 4,
      type: 'buy',
      asset: 'HDFCBANK',
      quantity: 20,
      price: 1650,
      amount: 33000,
      date: '2024-06-03',
      time: '11:15 AM'
    },
    {
      id: 5,
      type: 'sip',
      asset: 'ICICI Prudential Bluechip Fund',
      quantity: 3000,
      price: 567.89,
      amount: 3000,
      date: '2024-06-01',
      time: '9:00 AM'
    },
    {
      id: 6,
      type: 'buy',
      asset: 'BHARTIARTL',
      quantity: 50,
      price: 850,
      amount: 42500,
      date: '2024-05-28',
      time: '3:20 PM'
    }
  ],
  sipSummary: [
    {
      id: 1,
      fundName: 'SBI Equity Hybrid Fund',
      amount: 5000,
      frequency: 'Monthly',
      startDate: '2023-01-15',
      totalInvested: 90000,
      currentValue: 102500,
      returns: 13.89
    },
    {
      id: 2,
      fundName: 'ICICI Prudential Bluechip Fund',
      amount: 3000,
      frequency: 'Monthly',
      startDate: '2023-03-10',
      totalInvested: 45000,
      currentValue: 52500,
      returns: 16.67
    },
    {
      id: 3,
      fundName: 'HDFC Equity Fund',
      amount: 7000,
      frequency: 'Monthly',
      startDate: '2022-11-20',
      totalInvested: 126000,
      currentValue: 147000,
      returns: 16.67
    }
  ],
  goals: [
    {
      id: 1,
      name: 'Retirement Fund',
      targetAmount: 5000000,
      currentAmount: 1200000,
      targetDate: '2045-12-31',
      progress: 24
    },
    {
      id: 2,
      name: 'Child Education',
      targetAmount: 2000000,
      currentAmount: 450000,
      targetDate: '2035-06-30',
      progress: 22.5
    },
    {
      id: 3,
      name: 'House Down Payment',
      targetAmount: 3000000,
      currentAmount: 595600,
      targetDate: '2027-12-31',
      progress: 19.85
    }
  ]
};