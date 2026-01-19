// src/pages/Dashboard.jsx - Groww-style Dashboard (After Login)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiMenu, 
  FiSearch,
  FiBell,
  FiBarChart2,
  FiChevronDown
} from 'react-icons/fi';
import MarketIndices from '../components/dashboard/MarketIndices';
import MostBoughtStocks from '../components/dashboard/MostBoughtStocks';
import TopMarketMovers from '../components/dashboard/TopMarketMovers';
import SectorsTrending from '../components/dashboard/SectorsTrending';
import MostBoughtETFs from '../components/dashboard/MostBoughtETFs';
import GrowwETFs from '../components/dashboard/GrowwETFs';
import StocksInNews from '../components/dashboard/StocksInNews';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import YourInvestments from '../components/dashboard/YourInvestments';
import Footer from '../components/layout/Footer';
import { useAuth } from '../hooks/useAuth';
import { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Nav */}
          <div className="h-16 flex items-center justify-between">
            {/* Left: Logo and Nav Links */}
            <div className="flex items-center space-x-6 flex-1">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <FiBarChart2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Groww</span>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/stocks" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Stocks
                </Link>
                <Link to="/futures-and-options" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  F&O
                </Link>
                <Link to="/mutual-funds" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Mutual Funds
                </Link>
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

            {/* Right: Search, Notifications, Profile */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
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
              
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm font-semibold">
                  {(user?.name || 'Wasim Anish Khan').charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Nav Links */}
          <div className="h-12 flex items-center space-x-6 border-t border-gray-100">
            <Link to="/explore" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Explore
            </Link>
            <Link to="/dashboard/holdings" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Holdings
            </Link>
            <Link to="/positions" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Positions
            </Link>
            <Link to="/orders" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Orders
            </Link>
            <Link to="/watchlist" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Watchlist
            </Link>
          </div>
        </div>
      </header>

      {/* Market Indices Bar */}
      <MarketIndices />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Your Investments */}
            <YourInvestments />

            {/* Most Bought Stocks */}
            <MostBoughtStocks />

            {/* Top Market Movers */}
            <TopMarketMovers />

            {/* Most Traded Stocks in MTF */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Most traded stocks in MTF</h2>
                <Link to="/mtf" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  See more &gt;
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { symbol: 'TATASLV', price: 28.53, change: 1.28, changePercent: 4.2, isPositive: true },
                  { symbol: 'SILVERBEES', price: 280.20, change: 10.76, changePercent: 3.99, isPositive: true },
                  { symbol: 'ICICI Prudential Silver E', price: 292.31, change: 10.04, changePercent: 3.78, isPositive: true },
                  { symbol: 'Reliance Industries', price: 1413.50, change: -44.40, changePercent: -3.06, isPositive: false },
                ].map((stock, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
                    <p className="text-sm font-semibold mb-2 truncate" style={{ color: '#04b488' }}>{stock.symbol}</p>
                    <p className="text-lg font-bold text-gray-600 mb-1">₹{stock.price.toFixed(2)}</p>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      <span>{stock.isPositive ? '+' : ''}{stock.change.toFixed(2)} ({stock.isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Intraday Stocks */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Top intraday stocks</h2>
                <Link to="/intraday-screener" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  Intraday screener &gt;
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { symbol: 'Jindal SAW', price: 179.22, change: 24.58, changePercent: 15.89 },
                  { symbol: 'Bharat Coking Coal', price: 40.99, change: 17.99, changePercent: 78.22 },
                  { symbol: 'Netweb Technologies', price: 3441.00, change: 53.60, changePercent: 2.80 },
                  { symbol: 'SILVERBEES', price: 280.20, change: 10.76, changePercent: 3.99 },
                ].map((stock, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
                    <p className="text-sm font-semibold mb-2 truncate" style={{ color: '#04b488' }}>{stock.symbol}</p>
                    <p className="text-lg font-bold text-gray-600 mb-1">₹{stock.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                      <span>+{stock.change.toFixed(2)} (+{stock.changePercent.toFixed(2)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Trending */}
            <SectorsTrending />

            {/* Most Bought ETFs */}
            <MostBoughtETFs />

            {/* ETFs by Groww */}
            <GrowwETFs />

            {/* Stocks in News */}
            <StocksInNews />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <DashboardSidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default Dashboard;
