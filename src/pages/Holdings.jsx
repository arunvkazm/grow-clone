import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiSearch, FiBell, FiChevronDown, FiEye, FiMoreVertical, FiChevronUp } from 'react-icons/fi';
import MarketIndices from '../components/dashboard/MarketIndices';
import HoldingsTable from '../components/dashboard/HoldingsTable';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import SecondaryNav from '../components/dashboard/SecondaryNav';
import Footer from '../components/layout/Footer';
import { useAuth } from '../hooks/useAuth';

const Holdings = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  
  const holdingsSummary = {
    currentValue: 10908000 + 19425000 + 70350000 + 26572500 + 65706000,
    investedValue: 214250000,
    oneDayReturns: 1104 * 1000 + (-19.40) * 15000 + 51.30 * 50000 + 75.70 * 25000 + 143.70 * 15000,
  };
  holdingsSummary.totalReturns = holdingsSummary.currentValue - holdingsSummary.investedValue;
  holdingsSummary.totalReturnsPercent = (holdingsSummary.totalReturns / holdingsSummary.investedValue) * 100;
  holdingsSummary.oneDayReturnsPercent = (holdingsSummary.oneDayReturns / holdingsSummary.investedValue) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
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
          <SecondaryNav />
        </div>
      </header>

      <MarketIndices />

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="lg:col-span-3 min-w-0">
            {/* Holdings Summary Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4 overflow-hidden">
              <div className="px-3 sm:px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-sm font-medium text-gray-900">Holdings (5)</span>
                    {isExpanded ? (
                      <FiChevronUp className="h-4 w-4 text-gray-600" />
                    ) : (
                      <FiChevronDown className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <FiEye className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">
                    Analyse
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <FiMoreVertical className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              {isExpanded && (
                <div className="px-3 sm:px-4 py-4">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Current value</p>
                      <p className="text-sm font-semibold text-gray-900">₹{holdingsSummary.currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Invested value</p>
                      <p className="text-sm font-semibold text-gray-900">₹{holdingsSummary.investedValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">1D returns</p>
                      <p className={`text-sm font-semibold ${holdingsSummary.oneDayReturns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{holdingsSummary.oneDayReturns.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({holdingsSummary.oneDayReturnsPercent >= 0 ? '+' : ''}{holdingsSummary.oneDayReturnsPercent.toFixed(2)}%)
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Total returns</p>
                      <p className={`text-sm font-semibold ${holdingsSummary.totalReturns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{holdingsSummary.totalReturns.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({holdingsSummary.totalReturnsPercent >= 0 ? '+' : ''}{holdingsSummary.totalReturnsPercent.toFixed(2)}%)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Holdings Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <HoldingsTable />
            </div>
          </div>
          <div className="lg:col-span-1">
            <DashboardSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Holdings;

