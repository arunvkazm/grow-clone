// src/pages/Orders.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiFilter, FiDownload, FiClock, FiCheckCircle, FiXCircle, FiBarChart2, FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';
import MarketIndices from '../components/dashboard/MarketIndices';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import Footer from '../components/layout/Footer';

const Orders = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const isActive = location.pathname === '/orders';

  // Sample order data
  const orders = [
    {
      id: 1,
      type: 'Buy',
      instrument: 'RELIANCE',
      instrumentName: 'Reliance Industries',
      quantity: 10,
      price: 2456.75,
      orderType: 'Market',
      status: 'Completed',
      date: '2024-06-10',
      time: '10:30 AM',
      total: 24567.50
    },
    {
      id: 2,
      type: 'Sell',
      instrument: 'TCS',
      instrumentName: 'Tata Consultancy Services',
      quantity: 5,
      price: 3345.50,
      orderType: 'Limit',
      status: 'Pending',
      date: '2024-06-10',
      time: '11:15 AM',
      total: 16727.50
    },
    {
      id: 3,
      type: 'Buy',
      instrument: 'SBI Equity Hybrid Fund',
      instrumentName: 'SBI Equity Hybrid Fund',
      quantity: 1000,
      price: 145.67,
      orderType: 'SIP',
      status: 'Completed',
      date: '2024-06-08',
      time: '9:00 AM',
      total: 145670.00
    },
    {
      id: 4,
      type: 'Buy',
      instrument: 'HDFCBANK',
      instrumentName: 'HDFC Bank',
      quantity: 20,
      price: 1678.90,
      orderType: 'Market',
      status: 'Cancelled',
      date: '2024-06-05',
      time: '2:45 PM',
      total: 33578.00
    },
    {
      id: 5,
      type: 'Sell',
      instrument: 'INFY',
      instrumentName: 'Infosys',
      quantity: 15,
      price: 1456.25,
      orderType: 'Limit',
      status: 'Completed',
      date: '2024-06-03',
      time: '3:20 PM',
      total: 21843.75
    }
  ];

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === filter.toLowerCase());

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <FiCheckCircle className="h-5 w-5 text-green-500" />;
      case 'Pending':
        return <FiClock className="h-5 w-5 text-yellow-500" />;
      case 'Cancelled':
        return <FiXCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 bg-green-50';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'Cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6 flex-1">
              <GrowwLogo size="md" showStocks={true} />
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/stocks" className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1">
                  Stocks
                </Link>
                <Link to="/futures-and-options" className="text-sm font-medium text-gray-700 hover:text-gray-900">F&O</Link>
                <Link to="/mutual-funds" className="text-sm font-medium text-gray-700 hover:text-gray-900">Mutual Funds</Link>
                <div className="relative" onMouseEnter={() => setShowMoreMenu(true)} onMouseLeave={() => setShowMoreMenu(false)}>
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center space-x-1">
                    <span>More</span>
                    <FiChevronDown className="h-4 w-4" />
                  </button>
                  {showMoreMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link to="/ipos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">IPOs</Link>
                      <Link to="/bonds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bonds</Link>
                      <Link to="/commodities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Commodities</Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search Groww..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <FiBell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  4
                </span>
              </button>
              
              <ProfileDropdown />
            </div>
          </div>

          {/* Secondary Nav Links */}
          <div className="h-12 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <Link to="/explore" className="text-sm font-medium text-gray-700 hover:text-gray-900">Explore</Link>
              <Link to="/holdings" className="text-sm font-medium text-gray-700 hover:text-gray-900">Holdings</Link>
              <Link to="/positions" className="text-sm font-medium text-gray-700 hover:text-gray-900">Positions</Link>
              <Link to="/orders" className={`text-sm font-medium pb-3 ${isActive ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
                Orders
              </Link>
              <Link to="/watchlist" className="text-sm font-medium text-gray-700 hover:text-gray-900">Watchlist</Link>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">
                <span>0</span>
                <span>Terminal</span>
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">
                915
              </button>
            </div>
          </div>
        </div>
      </header>

      <MarketIndices />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Orders & Transactions</h1>
              <p className="text-gray-600">View your order history and transaction details</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FiDownload className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex items-center space-x-4">
            <FiFilter className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filter by Status:</span>
            <div className="flex space-x-2">
              {['all', 'completed', 'pending', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === status
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
              <div className="col-span-2">Date & Time</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-3">Instrument</div>
              <div className="col-span-1 text-right">Qty</div>
              <div className="col-span-1 text-right">Price</div>
              <div className="col-span-1 text-right">Total</div>
              <div className="col-span-1 text-center">Status</div>
              <div className="col-span-1 text-center">Action</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No orders found</p>
              </div>
            ) : (
              filteredOrders.map((order) => (
                <div key={order.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2">
                      <div className="text-sm font-medium text-gray-900">{order.date}</div>
                      <div className="text-xs text-gray-500">{order.time}</div>
                    </div>
                    <div className="col-span-2">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        order.type === 'Buy' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {order.type}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{order.orderType}</div>
                    </div>
                    <div className="col-span-3">
                      <div className="font-semibold text-gray-900">{order.instrumentName}</div>
                      <div className="text-sm text-gray-500">{order.instrument}</div>
                    </div>
                    <div className="col-span-1 text-right">
                      <div className="text-gray-900">{order.quantity}</div>
                    </div>
                    <div className="col-span-1 text-right">
                      <div className="text-gray-600">₹{order.price.toFixed(2)}</div>
                    </div>
                    <div className="col-span-1 text-right">
                      <div className="font-semibold text-gray-600">₹{order.total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span>{order.status}</span>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      {order.status === 'Pending' && (
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <FiCheckCircle className="h-6 w-6 text-primary-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {orders.filter(o => o.status === 'Completed').length}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <FiCheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {orders.filter(o => o.status === 'Pending').length}
                </p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <FiClock className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;

