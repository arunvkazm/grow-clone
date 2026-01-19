import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';

const YourInvestments = () => {
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Your investments</h2>
        <Link
          to="/holdings"
          className="text-primary-500 hover:text-primary-600 text-sm font-medium"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-4">
        {/* Portfolio Value */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Portfolio Value</p>
            <FiDollarSign className="h-5 w-5 text-primary-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {formatLargeCurrency(currentValue)}
          </h3>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-1 ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGain >= 0 ? (
                <FiTrendingUp className="h-4 w-4" />
              ) : null}
              <span className="text-sm font-semibold">
                {totalGain >= 0 ? '+' : ''}{formatLargeCurrency(Math.abs(totalGain))} ({totalGain >= 0 ? '+' : ''}{gainPercentage}%)
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-1">Total Invested</p>
            <p className="text-lg font-bold text-gray-900">{formatLargeCurrency(totalInvestment)}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-1">Holdings</p>
            <p className="text-lg font-bold text-gray-900">{portfolioData.holdings.length}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-gray-200">
          <Link
            to="/stocks"
            className="block w-full text-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
          >
            Invest More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YourInvestments;

