// src/pages/Watchlist.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiStar, FiTrendingUp, FiTrendingDown, FiX, FiBarChart2, FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { stocks } from '../data/stocks';
import { mutualFunds } from '../data/mutualFunds';
import { useAuth } from '../hooks/useAuth';
import MarketIndices from '../components/dashboard/MarketIndices';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import Footer from '../components/layout/Footer';

const Watchlist = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const isActive = location.pathname === '/watchlist';

  useEffect(() => {
    // Load watchlist from localStorage
    const savedWatchlist = localStorage.getItem('market_watchlist');
    if (savedWatchlist) {
      setWatchlistItems(JSON.parse(savedWatchlist));
    } else {
      // Default watchlist with some popular items
      const defaultWatchlist = [
        { type: 'stock', id: 1 },
        { type: 'stock', id: 2 },
        { type: 'mutualFund', id: 1 },
        { type: 'mutualFund', id: 2 }
      ];
      setWatchlistItems(defaultWatchlist);
      localStorage.setItem('market_watchlist', JSON.stringify(defaultWatchlist));
    }
  }, []);

  const removeFromWatchlist = (type, id) => {
    const updated = watchlistItems.filter(item => !(item.type === type && item.id === id));
    setWatchlistItems(updated);
    localStorage.setItem('market_watchlist', JSON.stringify(updated));
  };

  const getItemData = (type, id) => {
    if (type === 'stock') {
      return stocks.find(s => s.id === id);
    } else {
      return mutualFunds.find(m => m.id === id);
    }
  };

  const watchlistData = watchlistItems.map(item => ({
    ...item,
    data: getItemData(item.type, item.id)
  })).filter(item => item.data); // Filter out any items that don't exist

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
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
              <Link to="/orders" className="text-sm font-medium text-gray-700 hover:text-gray-900">Orders</Link>
              <Link to="/watchlist" className={`text-sm font-medium pb-3 ${isActive ? 'text-primary-600 border-b-2 border-primary-500' : 'text-gray-700 hover:text-gray-900'}`}>
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

      <MarketIndices />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Watchlist</h1>
              <p className="text-gray-600">Track your favorite stocks and mutual funds</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiStar className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold text-gray-700">{watchlistData.length} items</span>
            </div>
          </div>
        </div>

        {watchlistData.length === 0 ? (
          <div className="bg-white rounded-xl shadow-card p-12 text-center">
            <FiStar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your watchlist is empty</h3>
            <p className="text-gray-600 mb-6">Start adding stocks and mutual funds to track them here</p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/stocks"
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Browse Stocks
              </Link>
              <Link
                to="/mutual-funds"
                className="px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Browse Mutual Funds
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Stocks Section */}
            {watchlistData.filter(item => item.type === 'stock').length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Stocks</h2>
                <div className="bg-white rounded-xl shadow-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                      <div className="col-span-5">Stock</div>
                      <div className="col-span-2 text-right">Price</div>
                      <div className="col-span-2 text-right">Change</div>
                      <div className="col-span-2 text-right">Market Cap</div>
                      <div className="col-span-1 text-right">Action</div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {watchlistData
                      .filter(item => item.type === 'stock')
                      .map((item) => {
                        const stock = item.data;
                        return (
                          <div key={`stock-${stock.id}`} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="grid grid-cols-12 gap-4 items-center">
                              <div className="col-span-5">
                                <Link to={`/stocks/${stock.id}`} className="flex items-center space-x-3">
                                  <div className="p-2 bg-primary-50 rounded-lg">
                                    <FiStar className="h-4 w-4 text-primary-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-gray-900">{stock.name}</div>
                                    <div className="text-sm text-gray-500">{stock.symbol}</div>
                                  </div>
                                </Link>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className="font-semibold text-gray-900">₹{stock.price.toFixed(2)}</div>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className={`flex items-center justify-end space-x-1 ${
                                  stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {stock.changePercent >= 0 ? (
                                    <FiTrendingUp className="h-4 w-4" />
                                  ) : (
                                    <FiTrendingDown className="h-4 w-4" />
                                  )}
                                  <span className="font-semibold">
                                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                                  </span>
                                </div>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className="text-gray-600">{stock.marketCap}</div>
                              </div>
                              <div className="col-span-1 text-right">
                                <button
                                  onClick={() => removeFromWatchlist('stock', stock.id)}
                                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <FiX className="h-5 w-5 text-red-500" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}

            {/* Mutual Funds Section */}
            {watchlistData.filter(item => item.type === 'mutualFund').length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mutual Funds</h2>
                <div className="bg-white rounded-xl shadow-card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                      <div className="col-span-5">Fund Name</div>
                      <div className="col-span-2 text-right">NAV</div>
                      <div className="col-span-2 text-right">Change</div>
                      <div className="col-span-2 text-right">1Y Returns</div>
                      <div className="col-span-1 text-right">Action</div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {watchlistData
                      .filter(item => item.type === 'mutualFund')
                      .map((item) => {
                        const fund = item.data;
                        return (
                          <div key={`fund-${fund.id}`} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="grid grid-cols-12 gap-4 items-center">
                              <div className="col-span-5">
                                <Link to={`/mutual-funds/${fund.id}`} className="flex items-center space-x-3">
                                  <div className="p-2 bg-primary-50 rounded-lg">
                                    <FiStar className="h-4 w-4 text-primary-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-gray-900">{fund.name}</div>
                                    <div className="text-sm text-gray-500">{fund.category}</div>
                                  </div>
                                </Link>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className="font-semibold text-gray-900">₹{fund.nav.toFixed(2)}</div>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className={`flex items-center justify-end space-x-1 ${
                                  fund.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {fund.changePercent >= 0 ? (
                                    <FiTrendingUp className="h-4 w-4" />
                                  ) : (
                                    <FiTrendingDown className="h-4 w-4" />
                                  )}
                                  <span className="font-semibold">
                                    {fund.changePercent >= 0 ? '+' : ''}{fund.changePercent.toFixed(2)}%
                                  </span>
                                </div>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className="text-green-600 font-semibold">+{fund.returns['1Y']}%</div>
                              </div>
                              <div className="col-span-1 text-right">
                                <button
                                  onClick={() => removeFromWatchlist('mutualFund', fund.id)}
                                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <FiX className="h-5 w-5 text-red-500" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Watchlist;

