import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';

const YourInvestments = () => {
  const totalInvestment = portfolioData.totalInvestment;
  const currentValue = portfolioData.currentValue;
  const totalGain = currentValue - totalInvestment;
  const totalGainPercentage = ((totalGain / totalInvestment) * 100).toFixed(2);
  
  // Calculate 1D returns (simulated - 1% of current value as example)
  const oneDayReturns = -(currentValue * 0.0101); // -1.01% for negative returns
  const oneDayReturnsPercentage = -1.01;

  const formatCurrency = (amount) => {
    return `₹${Math.abs(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Your investments</h2>
        <Link
          to="/holdings"
          className="text-primary-500 hover:text-primary-600 text-sm font-medium"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-4">
        {/* Current Value */}
        <div className="flex items-center justify-between py-3">
          <p className="text-sm text-gray-600">Current</p>
          <p className="text-2xl font-bold text-gray-600">{formatCurrency(currentValue)}</p>
        </div>

        {/* 1D Returns */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">1D returns</p>
          <p className="text-sm font-medium text-red-600">
            {formatCurrency(oneDayReturns)} ({oneDayReturnsPercentage.toFixed(2)}%)
          </p>
        </div>

        {/* Total Returns */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">Total returns</p>
          <p className={`text-sm font-medium ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {totalGain >= 0 ? '+' : ''}{formatCurrency(totalGain)} ({totalGain >= 0 ? '+' : ''}{totalGainPercentage}%)
          </p>
        </div>

        {/* Invested Amount */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">Invested</p>
          <p className="text-sm font-medium text-gray-600">{formatCurrency(totalInvestment)}</p>
        </div>
      </div>
    </div>
  );
};

export default YourInvestments;

