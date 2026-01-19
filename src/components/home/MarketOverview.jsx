// src/components/home/MarketOverview.jsx
import React from 'react';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { marketIndices } from '../../data/marketData';

const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {marketIndices.map((index) => {
        const isPositive = index.change >= 0;
        
        return (
          <div key={index.id} className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{index.name}</h3>
              <span className="text-sm text-gray-500">{index.symbol}</span>
            </div>
            <div className="mb-2">
              <div className="text-2xl font-bold text-gray-900">{index.value.toLocaleString('en-IN')}</div>
              <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? (
                  <FiTrendingUp className="mr-1" />
                ) : (
                  <FiTrendingDown className="mr-1" />
                )}
                <span className="font-medium">
                  {isPositive ? '+' : ''}{index.change.toFixed(2)} ({isPositive ? '+' : ''}{index.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              High: {index.high.toLocaleString('en-IN')} • Low: {index.low.toLocaleString('en-IN')}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketOverview;