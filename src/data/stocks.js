// src/data/stocks.js
export const stocks = [
  {
    id: 1,
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: 2456.75,
    change: 45.25,
    changePercent: 1.88,
    marketCap: '₹15.2L Cr',
    pe: 28.5,
    sector: 'Energy',
    description: 'Reliance Industries Limited is an Indian multinational conglomerate company headquartered in Mumbai.',
    volume: '45.2M'
  },
  {
    id: 2,
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    price: 3345.50,
    change: -12.75,
    changePercent: -0.38,
    marketCap: '₹12.3L Cr',
    pe: 32.1,
    sector: 'IT',
    description: 'Tata Consultancy Services Limited is an Indian multinational information technology service and consulting company.',
    volume: '12.8M'
  },
  {
    id: 3,
    symbol: 'HDFCBANK',
    name: 'HDFC Bank',
    price: 1678.90,
    change: 23.45,
    changePercent: 1.42,
    marketCap: '₹11.8L Cr',
    pe: 20.3,
    sector: 'Banking',
    description: 'HDFC Bank Limited is an Indian banking and financial services company headquartered in Mumbai.',
    volume: '28.9M'
  },
  {
    id: 4,
    symbol: 'INFY',
    name: 'Infosys',
    price: 1456.25,
    change: 34.75,
    changePercent: 2.45,
    marketCap: '₹6.1L Cr',
    pe: 25.8,
    sector: 'IT',
    description: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.',
    volume: '15.6M'
  },
  {
    id: 5,
    symbol: 'ICICIBANK',
    name: 'ICICI Bank',
    price: 987.65,
    change: 15.20,
    changePercent: 1.56,
    marketCap: '₹6.8L Cr',
    pe: 18.9,
    sector: 'Banking',
    description: 'ICICI Bank Limited is an Indian multinational banking and financial services company headquartered in Mumbai.',
    volume: '32.4M'
  },
  {
    id: 6,
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel',
    price: 856.40,
    change: -8.90,
    changePercent: -1.03,
    marketCap: '₹5.2L Cr',
    pe: 45.6,
    sector: 'Telecom',
    description: 'Bharti Airtel Limited is an Indian global telecommunications services company based in New Delhi.',
    volume: '18.7M'
  },
  {
    id: 7,
    symbol: 'ITC',
    name: 'ITC Limited',
    price: 432.15,
    change: 5.25,
    changePercent: 1.23,
    marketCap: '₹5.4L Cr',
    pe: 22.4,
    sector: 'FMCG',
    description: 'ITC Limited is an Indian multinational conglomerate company headquartered in Kolkata.',
    volume: '24.3M'
  },
  {
    id: 8,
    symbol: 'SBIN',
    name: 'State Bank of India',
    price: 567.80,
    change: 9.45,
    changePercent: 1.69,
    marketCap: '₹5.1L Cr',
    pe: 15.6,
    sector: 'Banking',
    description: 'State Bank of India is an Indian multinational public sector bank and financial services statutory body headquartered in Mumbai.',
    volume: '38.9M'
  },
  {
    id: 9,
    symbol: 'WIPRO',
    name: 'Wipro',
    price: 432.10,
    change: -3.45,
    changePercent: -0.79,
    marketCap: '₹2.4L Cr',
    pe: 19.8,
    sector: 'IT',
    description: 'Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.',
    volume: '14.2M'
  },
  {
    id: 10,
    symbol: 'HINDUNILVR',
    name: 'Hindustan Unilever',
    price: 2456.30,
    change: 12.80,
    changePercent: 0.52,
    marketCap: '₹5.8L Cr',
    pe: 65.3,
    sector: 'FMCG',
    description: 'Hindustan Unilever Limited is an Indian consumer goods company headquartered in Mumbai.',
    volume: '8.9M'
  }
];

// Chart data for each stock
export const stockChartData = {
  1: [
    { date: '2024-01', price: 2300 },
    { date: '2024-02', price: 2350 },
    { date: '2024-03', price: 2400 },
    { date: '2024-04', price: 2425 },
    { date: '2024-05', price: 2456.75 },
  ],
  2: [
    { date: '2024-01', price: 3200 },
    { date: '2024-02', price: 3250 },
    { date: '2024-03', price: 3300 },
    { date: '2024-04', price: 3325 },
    { date: '2024-05', price: 3345.5 },
  ],
  // ... similar data for other stocks
};