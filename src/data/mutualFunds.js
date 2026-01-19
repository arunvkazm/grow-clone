// src/data/mutualFunds.js
export const mutualFunds = [
  {
    id: 1,
    name: 'SBI Equity Hybrid Fund',
    category: 'Hybrid',
    risk: 'Moderate',
    nav: 145.67,
    change: 1.23,
    changePercent: 0.85,
    returns: {
      '1Y': 12.5,
      '3Y': 14.2,
      '5Y': 15.8
    },
    aum: '₹12,456 Cr',
    expenseRatio: 1.25,
    description: 'An open-ended hybrid scheme investing predominantly in equity and equity related instruments.',
    assetAllocation: [
      { name: 'Equity', value: 65 },
      { name: 'Debt', value: 25 },
      { name: 'Cash', value: 10 }
    ]
  },
  {
    id: 2,
    name: 'ICICI Prudential Bluechip Fund',
    category: 'Equity',
    risk: 'High',
    nav: 567.89,
    change: -2.34,
    changePercent: -0.41,
    returns: {
      '1Y': 18.2,
      '3Y': 16.5,
      '5Y': 17.9
    },
    aum: '₹28,345 Cr',
    expenseRatio: 1.05,
    description: 'An open-ended equity scheme predominantly investing in large cap stocks.',
    assetAllocation: [
      { name: 'Large Cap', value: 80 },
      { name: 'Mid Cap', value: 15 },
      { name: 'Cash', value: 5 }
    ]
  },
  // ... more mutual funds
];