// src/components/dashboard/HoldingsTable.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const HoldingsTable = () => {
  const holdings = [
    { name: 'Dixon Technologies (India)', symbol: 'DIXON', quantity: 1000, currentPrice: 10908, currentValue: 10908000, investedValue: 10200000, oneDayChange: 1104, oneDayChangePercent: 11.26 },
    { name: 'Infosys', symbol: 'INFY', quantity: 15000, currentPrice: 1295.60, currentValue: 19425000, investedValue: 19950000, oneDayChange: -19.40, oneDayChangePercent: -1.48 },
    { name: 'United Spirits', symbol: 'UNITDSPR', quantity: 50000, currentPrice: 1407.10, currentValue: 70350000, investedValue: 67500000, oneDayChange: 51.30, oneDayChangePercent: 3.78 },
    { name: 'Shriram Finance', symbol: 'SHRIRAMFIN', quantity: 25000, currentPrice: 1062.90, currentValue: 26572500, investedValue: 24800000, oneDayChange: 75.70, oneDayChangePercent: 7.67 },
    { name: 'Interglobe Aviation', symbol: 'INDIGO', quantity: 15000, currentPrice: 4380.40, currentValue: 65706000, investedValue: 61800000, oneDayChange: 143.70, oneDayChangePercent: 3.39 },
  ].map((h) => {
    const returns = h.currentValue - h.investedValue;
    const returnsPercent = ((returns / h.investedValue) * 100);
    const avgPrice = h.investedValue / h.quantity;
    return { ...h, returns, returnsPercent, avgPrice };
  });

  const formatCurrency = (n) => n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
          {holdings.map((holding, idx) => {
            const sparklineData = Array.from({ length: 20 }, (_, i) => ({
              value: holding.currentPrice * (0.95 + (i / 20) * 0.1) + (holding.oneDayChange >= 0 ? i * 2 : -i * 2)
            }));
            const isPositive = holding.oneDayChange >= 0;
            const isReturnsPositive = holding.returns >= 0;
            return (
              <tr key={holding.symbol} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100">
                      <span className="font-bold text-blue-600 text-sm">{holding.symbol.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium" style={{ color: '#04b488' }}>{holding.name}</div>
                      <div className="text-xs text-gray-600">
                        {holding.quantity.toLocaleString('en-IN')} shares • Avg. ₹{holding.avgPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="w-16 h-8 flex-shrink-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={sparklineData}>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke={isPositive ? '#10b981' : '#ef4444'}
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
                    <p className="text-sm font-medium text-gray-900">₹{holding.currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {isPositive ? '+' : ''}{holding.oneDayChange.toFixed(2)} ({isPositive ? '+' : ''}{holding.oneDayChangePercent.toFixed(2)}%)
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div>
                    <p className={`text-sm font-medium ${isReturnsPositive ? 'text-green-600' : 'text-red-600'}`}>
                      ₹{holding.returns.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className={`text-xs ${isReturnsPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {isReturnsPositive ? '+' : ''}{holding.returnsPercent.toFixed(2)}%
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <div>
                    <p className="text-sm font-medium text-gray-900">₹{formatCurrency(holding.currentValue)}</p>
                    <p className="text-xs text-gray-600">₹{formatCurrency(holding.investedValue)}</p>
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