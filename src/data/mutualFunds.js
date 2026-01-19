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
  {
    id: 3,
    name: 'HDFC Equity Fund',
    category: 'Equity',
    risk: 'High',
    nav: 295.75,
    change: 3.45,
    changePercent: 1.18,
    returns: {
      '1Y': 20.5,
      '3Y': 18.3,
      '5Y': 19.2
    },
    aum: '₹15,678 Cr',
    expenseRatio: 1.15,
    description: 'An open-ended equity scheme investing across market capitalizations.',
    assetAllocation: [
      { name: 'Large Cap', value: 60 },
      { name: 'Mid Cap', value: 30 },
      { name: 'Small Cap', value: 10 }
    ]
  },
  {
    id: 4,
    name: 'Axis Bluechip Fund',
    category: 'Equity',
    risk: 'High',
    nav: 445.50,
    change: 5.25,
    changePercent: 1.19,
    returns: {
      '1Y': 19.8,
      '3Y': 17.5,
      '5Y': 18.9
    },
    aum: '₹22,134 Cr',
    expenseRatio: 1.08,
    description: 'An open-ended equity scheme investing in large cap companies.',
    assetAllocation: [
      { name: 'Large Cap', value: 85 },
      { name: 'Mid Cap', value: 10 },
      { name: 'Cash', value: 5 }
    ]
  },
  {
    id: 5,
    name: 'SBI Small Cap Fund',
    category: 'Equity',
    risk: 'Very High',
    nav: 125.45,
    change: 2.15,
    changePercent: 1.74,
    returns: {
      '1Y': 25.3,
      '3Y': 22.1,
      '5Y': 24.5
    },
    aum: '₹8,945 Cr',
    expenseRatio: 1.35,
    description: 'An open-ended equity scheme investing in small cap companies.',
    assetAllocation: [
      { name: 'Small Cap', value: 90 },
      { name: 'Mid Cap', value: 8 },
      { name: 'Cash', value: 2 }
    ]
  },
  {
    id: 6,
    name: 'HDFC Balanced Advantage Fund',
    category: 'Hybrid',
    risk: 'Moderate',
    nav: 78.90,
    change: 0.45,
    changePercent: 0.57,
    returns: {
      '1Y': 14.2,
      '3Y': 13.5,
      '5Y': 14.8
    },
    aum: '₹18,567 Cr',
    expenseRatio: 1.20,
    description: 'A dynamic asset allocation fund that adjusts equity and debt allocation.',
    assetAllocation: [
      { name: 'Equity', value: 55 },
      { name: 'Debt', value: 40 },
      { name: 'Cash', value: 5 }
    ]
  },
  {
    id: 7,
    name: 'ICICI Prudential Technology Fund',
    category: 'Sectoral',
    risk: 'Very High',
    nav: 234.56,
    change: 4.25,
    changePercent: 1.85,
    returns: {
      '1Y': 28.5,
      '3Y': 24.3,
      '5Y': 26.8
    },
    aum: '₹12,345 Cr',
    expenseRatio: 1.25,
    description: 'An open-ended equity scheme investing in technology sector companies.',
    assetAllocation: [
      { name: 'IT Stocks', value: 85 },
      { name: 'Other Tech', value: 12 },
      { name: 'Cash', value: 3 }
    ]
  },
  {
    id: 8,
    name: 'SBI Debt Fund',
    category: 'Debt',
    risk: 'Low',
    nav: 45.67,
    change: 0.12,
    changePercent: 0.26,
    returns: {
      '1Y': 7.2,
      '3Y': 6.8,
      '5Y': 7.1
    },
    aum: '₹15,234 Cr',
    expenseRatio: 0.85,
    description: 'An open-ended debt scheme investing in high quality debt instruments.',
    assetAllocation: [
      { name: 'Corporate Bonds', value: 60 },
      { name: 'Government Bonds', value: 35 },
      { name: 'Cash', value: 5 }
    ]
  }
];