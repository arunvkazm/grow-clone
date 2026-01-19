// src/components/mutualFunds/MutualFundCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const MutualFundCard = ({ fund }) => {
  const isPositive = fund.changePercent >= 0;
  const return1Y = fund.returns['1Y'];
  const isReturnPositive = return1Y >= 0;

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low':
        return 'text-green-600 bg-green-50';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-50';
      case 'high':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Link
      to={`/mutual-funds/${fund.id}`}
      className="block hover:bg-gray-50 transition-colors"
    >
      <div className="px-6 py-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Fund Info */}
          <div className="col-span-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-primary-600 font-bold">
                  {fund.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 line-clamp-1">{fund.name}</h3>
                <p className="text-sm text-gray-500">{fund.category} Fund</p>
              </div>
            </div>
          </div>

          {/* NAV */}
          <div className="col-span-2 text-right">
            <div className="text-lg font-semibold text-gray-900">
              ₹{fund.nav.toFixed(2)}
            </div>
            <div className={`inline-flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? (
                <FiTrendingUp className="mr-1" />
              ) : (
                <FiTrendingDown className="mr-1" />
              )}
              <span>{isPositive ? '+' : ''}{fund.changePercent.toFixed(2)}%</span>
            </div>
          </div>

          {/* 1Y Return */}
          <div className="col-span-2 text-right">
            <div className={`inline-flex items-center text-lg ${isReturnPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isReturnPositive ? (
                <FiTrendingUp className="mr-1" />
              ) : (
                <FiTrendingDown className="mr-1" />
              )}
              <span className="font-semibold">
                {isReturnPositive ? '+' : ''}{return1Y.toFixed(2)}%
              </span>
            </div>
          </div>

          {/* Risk and AUM */}
          <div className="col-span-3 text-right">
            <div className="flex flex-col items-end">
              <span className={`text-xs px-2 py-1 rounded-full mb-1 ${getRiskColor(fund.risk)}`}>
                {fund.risk} Risk
              </span>
              <div className="text-sm text-gray-500">AUM: {fund.aum}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MutualFundCard;