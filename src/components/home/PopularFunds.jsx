// src/components/home/PopularFunds.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { mutualFunds } from '../../data/mutualFunds';

const PopularFunds = () => {
  const popularFunds = [...mutualFunds].slice(0, 4);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {popularFunds.map((fund) => (
        <Link
          key={fund.id}
          to={`/mutual-funds/${fund.id}`}
          className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-shadow"
        >
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold line-clamp-2" style={{ color: '#04b488' }}>{fund.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(fund.risk)}`}>
                {fund.risk}
              </span>
            </div>
            <p className="text-sm text-gray-500">{fund.category} Fund</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">NAV</span>
              <span className="font-semibold text-gray-900">₹{fund.nav.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">1Y Return</span>
              <span className={`font-semibold ${fund.returns['1Y'] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {fund.returns['1Y'] >= 0 ? '+' : ''}{fund.returns['1Y']}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">AUM</span>
              <span className="font-semibold text-gray-900">{fund.aum}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularFunds;