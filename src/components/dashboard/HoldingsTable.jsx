// src/components/dashboard/HoldingsTable.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const HoldingsTable = () => {
  // Sample data matching screenshot - Trident stock
  const holding = {
    name: 'Trident',
    symbol: 'TRIDENT',
    quantity: 3,
    avgPrice: 35.30,
    currentPrice: 25.17,
    oneDayChange: -0.36,
    oneDayChangePercent: -1.41,
    returns: -30.39,
    returnsPercent: -28.70,
    currentValue: 75.51,
    investedValue: 105.90
  };

  // Generate sparkline data (downward trend)
  const sparklineData = Array.from({ length: 20 }, (_, i) => ({
    value: 30 - (i * 0.5) + Math.random() * 2
  }));

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
              <div className="flex items-center space-x-1">
                <span>Company</span>
                <FiChevronDown className="h-3 w-3" />
              </div>
            </th>
            <th className="text-right py-3 px-4 text-xs font-medium text-gray-600">
              <div className="flex items-center justify-end space-x-1">
                <span>Market price (1D%)</span>
                <FiChevronDown className="h-3 w-3" />
              </div>
            </th>
            <th className="text-right py-3 px-4 text-xs font-medium text-gray-600">
              <div className="flex items-center justify-end space-x-1">
                <span>Returns (%)</span>
                <FiChevronDown className="h-3 w-3" />
              </div>
            </th>
            <th className="text-right py-3 px-4 text-xs font-medium text-gray-600">
              <div className="flex items-center justify-end space-x-1">
                <span>Current (Invested)</span>
                <FiChevronDown className="h-3 w-3" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-4 px-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100">
                  <span className="font-bold text-blue-600">T</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium" style={{ color: '#04b488' }}>{holding.name}</div>
                  <div className="text-xs text-gray-600">
                    {holding.quantity} shares • Avg. ₹{holding.avgPrice.toFixed(2)}
                  </div>
                </div>
                <div className="w-16 h-8 flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>
                <p className="text-sm font-medium text-gray-900">₹{holding.currentPrice.toFixed(2)}</p>
                <p className="text-xs text-red-600">
                  {holding.oneDayChange >= 0 ? '+' : ''}{holding.oneDayChange.toFixed(2)} ({holding.oneDayChangePercent >= 0 ? '+' : ''}{holding.oneDayChangePercent.toFixed(2)}%)
                </p>
              </div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>
                <p className="text-sm font-medium text-red-600">₹{holding.returns.toFixed(2)}</p>
                <p className="text-xs text-red-600">
                  {holding.returnsPercent >= 0 ? '+' : ''}{holding.returnsPercent.toFixed(2)}%
                </p>
              </div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>
                <p className="text-sm font-medium text-gray-900">₹{holding.currentValue.toFixed(2)}</p>
                <p className="text-xs text-gray-600">₹{holding.investedValue.toFixed(2)}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;