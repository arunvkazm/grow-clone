// src/data/adminData.js
export const adminUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    totalInvestment: 1250000,
    currentValue: 1543200,
    status: 'Active',
    joinedDate: '2023-01-15',
    lastLogin: '2024-06-10 10:30 AM',
    kycStatus: 'Verified'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+91 9876543211',
    totalInvestment: 850000,
    currentValue: 1020000,
    status: 'Active',
    joinedDate: '2023-03-20',
    lastLogin: '2024-06-09 2:15 PM',
    kycStatus: 'Verified'
  },
  {
    id: 3,
    name: 'Raj Kumar',
    email: 'raj.kumar@example.com',
    phone: '+91 9876543212',
    totalInvestment: 2100000,
    currentValue: 2450000,
    status: 'Active',
    joinedDate: '2022-11-10',
    lastLogin: '2024-06-10 9:00 AM',
    kycStatus: 'Verified'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 9876543213',
    totalInvestment: 450000,
    currentValue: 520000,
    status: 'Active',
    joinedDate: '2023-06-05',
    lastLogin: '2024-06-08 4:20 PM',
    kycStatus: 'Pending'
  },
  {
    id: 5,
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    phone: '+91 9876543214',
    totalInvestment: 3200000,
    currentValue: 3850000,
    status: 'Active',
    joinedDate: '2022-08-12',
    lastLogin: '2024-06-10 11:45 AM',
    kycStatus: 'Verified'
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    phone: '+91 9876543215',
    totalInvestment: 680000,
    currentValue: 750000,
    status: 'Inactive',
    joinedDate: '2023-02-18',
    lastLogin: '2024-05-15 3:30 PM',
    kycStatus: 'Verified'
  }
];

export const adminTransactions = [
  {
    id: 1,
    userId: 1,
    userName: 'John Doe',
    type: 'Buy',
    asset: 'RELIANCE',
    assetName: 'Reliance Industries',
    quantity: 10,
    price: 2456.75,
    amount: 24567.50,
    status: 'Completed',
    date: '2024-06-10',
    time: '10:30 AM',
    orderId: 'ORD-001234'
  },
  {
    id: 2,
    userId: 2,
    userName: 'Jane Smith',
    type: 'SIP',
    asset: 'SBI Equity Hybrid Fund',
    assetName: 'SBI Equity Hybrid Fund',
    quantity: 5000,
    price: 145.67,
    amount: 5000,
    status: 'Completed',
    date: '2024-06-10',
    time: '9:00 AM',
    orderId: 'ORD-001235'
  },
  {
    id: 3,
    userId: 3,
    userName: 'Raj Kumar',
    type: 'Sell',
    asset: 'TCS',
    assetName: 'Tata Consultancy Services',
    quantity: 5,
    price: 3345.50,
    amount: 16727.50,
    status: 'Pending',
    date: '2024-06-10',
    time: '11:15 AM',
    orderId: 'ORD-001236'
  },
  {
    id: 4,
    userId: 1,
    userName: 'John Doe',
    type: 'Buy',
    asset: 'HDFCBANK',
    assetName: 'HDFC Bank',
    quantity: 20,
    price: 1678.90,
    amount: 33578.00,
    status: 'Completed',
    date: '2024-06-09',
    time: '2:45 PM',
    orderId: 'ORD-001237'
  },
  {
    id: 5,
    userId: 4,
    userName: 'Priya Sharma',
    type: 'Buy',
    asset: 'INFY',
    assetName: 'Infosys',
    quantity: 15,
    price: 1456.25,
    amount: 21843.75,
    status: 'Completed',
    date: '2024-06-09',
    time: '10:20 AM',
    orderId: 'ORD-001238'
  },
  {
    id: 6,
    userId: 5,
    userName: 'Amit Patel',
    type: 'SIP',
    asset: 'ICICI Prudential Bluechip Fund',
    assetName: 'ICICI Prudential Bluechip Fund',
    quantity: 10000,
    price: 567.89,
    amount: 10000,
    status: 'Completed',
    date: '2024-06-08',
    time: '9:00 AM',
    orderId: 'ORD-001239'
  }
];

export const adminStats = {
  totalUsers: 125000,
  activeUsers: 98500,
  totalInvestments: 50000000000,
  totalTransactions: 1250000,
  todayTransactions: 1250,
  pendingOrders: 45,
  totalRevenue: 12500000
};

