import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiTrendingUp, 
  FiTrendingDown, 
  FiDollarSign, 
  FiTrendingUp as FiUp,
  FiVolume2,
  FiFileText,
  FiLayers,
  FiClock,
  FiCalendar,
  FiCreditCard,
  FiCheckSquare,
  FiFilter
} from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';

const DashboardSidebar = () => {
  const products = [
    { name: 'IPO', count: 5, status: 'open', icon: FiVolume2 },
    { name: 'Bonds', count: 1, status: 'open', icon: FiFileText },
    { name: 'ETF Screener', count: null, icon: FiLayers },
    { name: 'Intraday Screener', count: null, icon: FiClock },
    { name: 'Stocks SIP', count: null, icon: FiCalendar },
    { name: 'MTF stocks', count: null, icon: FiCreditCard },
    { name: 'Events calendar', count: null, icon: FiCheckSquare },
    { name: 'All Stocks screener', count: null, icon: FiFilter },
  ];

  const tradingScreens = [
    { 
      sentiment: 'Bullish', 
      name: 'Resistance breakouts', 
      type: 'bullish',
      image: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/stocks_near_breakout_light.webp'
    },
    { 
      sentiment: 'Bullish', 
      name: 'MACD above signal line', 
      type: 'bullish',
      image: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/macd_above_signal_line_light.webp'
    },
    { 
      sentiment: 'Bearish', 
      name: 'RSI overbought', 
      type: 'bearish',
      image: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/overbought_with_high_volume_light.webp'
    },
    { 
      sentiment: 'Bullish', 
      name: 'RSI oversold', 
      type: 'bullish',
      image: 'https://storage.googleapis.com/groww-static-content/app-assets/stocks/stocksIcons/oversold_with_high_volume_light.webp'
    },
  ];

  const totalInvestment = portfolioData.totalInvestment;
  const currentValue = portfolioData.currentValue;
  const totalGain = currentValue - totalInvestment;
  const gainPercentage = ((totalGain / totalInvestment) * 100).toFixed(2);

  const formatLargeCurrency = (amount) => {
    const cr = amount / 10000000;
    if (cr >= 100) {
      return `₹${cr.toFixed(0)} Cr`;
    }
    return `₹${cr.toFixed(2)} Cr`;
  };

  return (
    <div className="sticky top-20 space-y-6">
      {/* Your Investments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Your investments</h3>
        <div className="space-y-4">
          {/* Portfolio Value */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-600">Portfolio Value</p>
              <FiDollarSign className="h-4 w-4 text-primary-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {formatLargeCurrency(currentValue)}
            </p>
            <div className={`flex items-center space-x-1 ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGain >= 0 ? (
                <FiUp className="h-3 w-3" />
              ) : (
                <FiTrendingDown className="h-3 w-3" />
              )}
              <span className="text-xs font-semibold">
                {totalGain >= 0 ? '+' : ''}{formatLargeCurrency(Math.abs(totalGain))} ({totalGain >= 0 ? '+' : ''}{gainPercentage}%)
              </span>
            </div>
          </div>

          {/* Total Invested */}
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-600">Total Invested</p>
              <p className="text-sm font-semibold text-gray-900">{formatLargeCurrency(totalInvestment)}</p>
            </div>
          </div>

          {/* Holdings Count */}
          <div className="pt-2 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">Holdings</p>
              <p className="text-sm font-semibold text-gray-900">{portfolioData.holdings.length}</p>
            </div>
          </div>

          {/* View All Link */}
          <Link
            to="/holdings"
            className="block text-center pt-3 border-t border-gray-200 text-primary-500 hover:text-primary-600 text-sm font-medium"
          >
            View all →
          </Link>
        </div>
      </div>

      {/* Products & Tools */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Products & Tools</h3>
        <div className="space-y-0">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={index}
                to={`/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between px-2 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">{product.name}</span>
                </div>
                {product.count !== null && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    {product.count} {product.status}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Trading Screens */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Trading Screens</h3>
        <div className="space-y-3">
          {tradingScreens.map((screen, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3 flex-1">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  screen.type === 'bullish' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {screen.sentiment}
                </span>
                <span className="text-sm text-gray-700">{screen.name}</span>
              </div>
              <div className="w-12 h-8 rounded flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-100">
                <img 
                  src={screen.image} 
                  alt={screen.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/intraday-screener"
          className="block mt-4 text-primary-500 hover:text-primary-600 text-sm font-medium text-center"
        >
          Intraday screener &gt;
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;

