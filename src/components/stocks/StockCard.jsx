// src/components/stocks/StockCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const StockCard = ({ stock }) => {
  const isPositive = stock.changePercent >= 0;

  return (
    <Link
      to={`/stocks/${stock.id}`}
      className="block hover:bg-gray-50 transition-colors"
    >
      <div className="px-6 py-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Stock Info */}
          <div className="col-span-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-primary-600 font-bold">
                  {stock.symbol.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{stock.name}</h3>
                <p className="text-sm text-gray-500">{stock.symbol} • {stock.sector}</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="col-span-2 text-right">
            <div className="text-lg font-semibold text-gray-900">
              ₹{stock.price.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Change */}
          <div className="col-span-2 text-right">
            <div className={`inline-flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? (
                <FiTrendingUp className="mr-1" />
              ) : (
                <FiTrendingDown className="mr-1" />
              )}
              <span className="font-semibold">
                {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </span>
            </div>
            <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}₹{Math.abs(stock.change).toFixed(2)}
            </div>
          </div>

          {/* Market Cap */}
          <div className="col-span-3 text-right">
            <div className="font-medium text-gray-900">{stock.marketCap}</div>
            <div className="text-sm text-gray-500">PE: {stock.pe}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StockCard;