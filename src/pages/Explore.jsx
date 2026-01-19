import React from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2 } from 'react-icons/fi';
import MarketIndices from '../components/dashboard/MarketIndices';
import MostBoughtStocks from '../components/dashboard/MostBoughtStocks';
import TopMarketMovers from '../components/dashboard/TopMarketMovers';
import CompanyLogo from '../components/common/CompanyLogo';
import SectorsTrending from '../components/dashboard/SectorsTrending';
import MostBoughtETFs from '../components/dashboard/MostBoughtETFs';
import GrowwETFs from '../components/dashboard/GrowwETFs';
import StocksInNews from '../components/dashboard/StocksInNews';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import YourInvestments from '../components/dashboard/YourInvestments';
import Footer from '../components/layout/Footer';
import { useAuth } from '../hooks/useAuth';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';

const Explore = () => {
  const { user } = useAuth();
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
              <GrowwLogo size="md" showStocks={true} />
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/stocks" className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1">
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
              <div className="hidden md:flex relative items-center">
                <FiSearch className="absolute left-3 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search Groww..."
                  className="w-64 pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-3 text-xs text-gray-400">Ctrl+K</span>
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <FiBell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  3/4
                </span>
              </button>
              
              <ProfileDropdown />
            </div>
          </div>

          {/* Secondary Nav Links */}
          <div className="h-12 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <Link to="/explore" className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-3">
                Explore
              </Link>
              <Link to="/holdings" className="text-sm font-medium text-gray-700 hover:text-gray-900">
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

      {/* Market Indices Bar */}
      <MarketIndices />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <MostBoughtStocks />
            <TopMarketMovers />
            
            {/* Most Traded Stocks in MTF */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Most traded stocks in MTF</h2>
                <Link to="/mtf" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  See more &gt;
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { symbol: 'TATASLV', price: 28.53, change: 1.28, changePercent: 4.2, isPositive: true, isTata: true },
                  { symbol: 'SILVERBEES', price: 280.20, change: 10.76, changePercent: 3.99, isPositive: true },
                  { symbol: 'ICICI Prudential Silver E', price: 292.31, change: 10.04, changePercent: 3.78, isPositive: true },
                  { symbol: 'Reliance Industries', price: 1413.50, change: -44.40, changePercent: -3.06, isPositive: false },
                ].map((stock, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
                    <div className="mb-3">
                      {stock.isTata ? (
                        <div className="bg-white border border-gray-200 rounded px-2 py-1 inline-block">
                          <p className="text-xs font-semibold text-green-600">TATA mutual fund</p>
                        </div>
                      ) : (
                        <CompanyLogo companyName={stock.symbol} className="w-10 h-10" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 truncate">{stock.symbol}</p>
                    <p className="text-base font-semibold text-gray-600 mb-1">₹{stock.price.toFixed(2)}</p>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      <span>{stock.isPositive ? '+' : ''}{stock.change.toFixed(2)} ({stock.isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Intraday Stocks */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Top intraday stocks</h2>
                <Link to="/intraday-screener" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                  Intraday screener &gt;
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { symbol: 'Jindal SAW', price: 179.77, change: 25.13, changePercent: 16.25 },
                  { symbol: 'Bharat Coking Coal', price: 41.00, change: 18.00, changePercent: 78.26 },
                  { symbol: 'Netweb Technologies', price: 3416.60, change: 69.20, changePercent: 2.07 },
                  { symbol: 'SILVERBEES', price: 282.98, change: 13.54, changePercent: 5.03 },
                ].map((stock, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
                    <div className="mb-3">
                      <CompanyLogo companyName={stock.symbol} className="w-10 h-10" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 truncate">{stock.symbol}</p>
                    <p className="text-base font-semibold text-gray-600 mb-1">₹{stock.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                      <span>+{stock.change.toFixed(2)} (+{stock.changePercent.toFixed(2)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SectorsTrending />
            <MostBoughtETFs />
            <GrowwETFs />
            <StocksInNews />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <DashboardSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;

