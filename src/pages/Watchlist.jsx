// src/pages/Watchlist.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiTrendingUp, FiTrendingDown, FiX } from 'react-icons/fi';
import { stocks } from '../data/stocks';
import { mutualFunds } from '../data/mutualFunds';
import { useAuth } from '../hooks/useAuth';

const Watchlist = () => {
  const { user } = useAuth();
  const [watchlistItems, setWatchlistItems] = useState([]);

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
    <div className="min-h-screen bg-gray-50">
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
    </div>
  );
};

export default Watchlist;

