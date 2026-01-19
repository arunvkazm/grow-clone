// src/components/home/TopGainers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp } from 'react-icons/fi';
import { stocks } from '../../data/stocks';

const TopGainers = () => {
  const topGainers = [...stocks]
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {topGainers.map((stock) => (
        <Link
          key={stock.id}
          to={`/stocks/${stock.id}`}
          className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
              <span className="text-primary-600 font-bold text-lg">
                {stock.symbol.charAt(0)}
              </span>
            </div>
            <div className="flex items-center text-green-600">
              <FiTrendingUp className="mr-1" />
              <span className="font-semibold">+{stock.changePercent.toFixed(2)}%</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{stock.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{stock.symbol}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              ₹{stock.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-gray-500">{stock.sector}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopGainers;