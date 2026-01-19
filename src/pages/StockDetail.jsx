// src/pages/StockDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown, FiInfo, FiCalendar, FiDollarSign, FiPieChart } from 'react-icons/fi';
import StockChart from '../components/stocks/StockChart';
import { stocks, stockChartData } from '../data/stocks';
import toast from 'react-hot-toast';

const StockDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('1Y');
  const [quantity, setQuantity] = useState(10);
  
  const stock = stocks.find(s => s.id === parseInt(id));

  useEffect(() => {
    if (!stock) {
      toast.error('Stock not found');
      navigate('/stocks');
    }
  }, [stock, navigate]);

  if (!stock) {
    return null;
  }

  const isPositive = stock.changePercent >= 0;
  const totalValue = stock.price * quantity;

  const keyMetrics = [
    { label: 'Market Cap', value: stock.marketCap, icon: FiDollarSign },
    { label: 'P/E Ratio', value: stock.pe, icon: FiTrendingUp },
    { label: 'Sector', value: stock.sector, icon: FiPieChart },
    { label: 'Volume', value: stock.volume, icon: FiInfo },
  ];

  const handleBuy = () => {
    toast.success(`Order placed for ${quantity} shares of ${stock.symbol}`);
  };

  const handleSell = () => {
    toast.success(`Sell order placed for ${quantity} shares of ${stock.symbol}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <button onClick={() => navigate('/stocks')} className="hover:text-primary-600">
                Stocks
              </button>
            </li>
            <li>/</li>
            <li className="font-medium text-gray-900">{stock.symbol}</li>
          </ol>
        </nav>

        {/* Stock Header */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{stock.symbol.charAt(0)}</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{stock.name}</h1>
                  <p className="text-gray-500">{stock.symbol} • {stock.sector}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 lg:mt-0 text-right">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ₹{stock.price.toLocaleString('en-IN')}
              </div>
              <div className={`inline-flex items-center text-lg ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? (
                  <FiTrendingUp className="mr-2" />
                ) : (
                  <FiTrendingDown className="mr-2" />
                )}
                <span className="font-semibold">
                  {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </span>
                <span className="ml-2">
                  ({isPositive ? '+' : ''}₹{Math.abs(stock.change).toFixed(2)})
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-card p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Price Chart</h2>
                <div className="flex space-x-2">
                  {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        timeRange === range
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <StockChart data={stockChartData[stock.id] || []} />
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Company</h2>
              <p className="text-gray-600 mb-6">{stock.description}</p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Key Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <metric.icon className="h-5 w-5 text-primary-500" />
                      <span className="text-sm text-gray-500">{metric.label}</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Trading Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-card p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Trade {stock.symbol}</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-center"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Price</span>
                      <span className="font-medium">₹{stock.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity</span>
                      <span className="font-medium">{quantity}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-3">
                      <span className="font-semibold text-gray-900">Total Value</span>
                      <span className="text-xl font-bold text-gray-900">
                        ₹{totalValue.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleBuy}
                      className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                    >
                      Buy
                    </button>
                    <button
                      onClick={handleSell}
                      className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
                    >
                      Sell
                    </button>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    Order placed during market hours will be executed at market price
                  </div>
                </div>
              </div>

              {/* Investment Calculator */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Investment Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Calculate your potential returns with {stock.name}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Investment Amount (₹)</label>
                    <input
                      type="number"
                      defaultValue={10000}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Time Period (Years)</label>
                    <input
                      type="number"
                      defaultValue={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                    Calculate Returns
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;