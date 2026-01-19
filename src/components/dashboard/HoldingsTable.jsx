// src/components/dashboard/HoldingsTable.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';

const HoldingsTable = () => {
  const holdings = portfolioData.holdings;

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-6 text-gray-600 font-medium">Asset</th>
            <th className="text-right py-4 px-6 text-gray-600 font-medium">Quantity</th>
            <th className="text-right py-4 px-6 text-gray-600 font-medium">Avg. Cost</th>
            <th className="text-right py-4 px-6 text-gray-600 font-medium">Current Price</th>
            <th className="text-right py-4 px-6 text-gray-600 font-medium">Invested</th>
            <th className="text-right py-4 px-6 text-gray-600 font-medium">Current Value</th>
            <th className="text-right py-4 px-6 text-gray-600 font-medium">P&L</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding) => {
            const isPositive = holding.pnl >= 0;
            const pnlPercentage = ((holding.currentValue - holding.invested) / holding.invested * 100).toFixed(2);
            
            return (
              <tr key={holding.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6">
                  <Link to={`/${holding.type === 'stock' ? 'stocks' : 'mutual-funds'}/${holding.id}`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        holding.type === 'stock' ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        <span className={`font-bold ${
                          holding.type === 'stock' ? 'text-blue-600' : 'text-purple-600'
                        }`}>
                          {holding.symbol.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{holding.name}</div>
                        <div className="text-sm text-gray-500">
                          {holding.symbol} • {holding.type === 'stock' ? 'Stock' : 'Mutual Fund'}
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="py-4 px-6 text-right font-medium">
                  {holding.quantity} {holding.type === 'stock' ? 'shares' : 'units'}
                </td>
                <td className="py-4 px-6 text-right text-gray-700">
                  {formatCurrency(holding.avgCost)}
                </td>
                <td className="py-4 px-6 text-right font-medium">
                  {formatCurrency(holding.currentPrice)}
                </td>
                <td className="py-4 px-6 text-right text-gray-700">
                  {formatCurrency(holding.invested)}
                </td>
                <td className="py-4 px-6 text-right font-medium">
                  {formatCurrency(holding.currentValue)}
                </td>
                <td className="py-4 px-6 text-right">
                  <div className={`inline-flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? (
                      <FiTrendingUp className="mr-1" />
                    ) : (
                      <FiTrendingDown className="mr-1" />
                    )}
                    <span className="font-semibold">
                      {isPositive ? '+' : ''}{pnlPercentage}%
                    </span>
                    <span className="ml-2">
                      ({isPositive ? '+' : ''}{formatCurrency(Math.abs(holding.pnl))})
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;