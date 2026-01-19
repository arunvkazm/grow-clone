import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaInternetExplorer } from 'react-icons/fa';
import { FiTrendingUp, FiTrendingDown, FiWifi } from 'react-icons/fi';

const MarketIndices = () => {
  const indices = [
    { name: 'NIFTY', value: '25,585.50', change: -108.85, changePercent: -0.42 },
    { name: 'SENSEX', value: '83,246.18', change: -324.17, changePercent: -0.39 },
    { name: 'MIDCPNIFTY', value: '13,655.20', change: -42.65, changePercent: -0.31 },
    { name: 'FINNIFTY', value: '27,518.00', change: 0, changePercent: 0 }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center space-x-6">
          {indices.map((index, idx) => {
            const isPositive = index.change >= 0;
            const isLast = idx === indices.length - 1;
            return (
              <div key={index.name} className="flex items-center space-x-3 min-w-fit whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-gray-600 font-medium">{index.name}</p>
                  <p className="text-sm font-semibold text-gray-900">{index.value}</p>
                </div>
                <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="text-xs font-medium">
                    {isPositive ? '+' : ''}{index.change.toFixed(2)} ({isPositive ? '+' : ''}{index.changePercent.toFixed(2)}%)
                  </span>
                </div>
                {isLast && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" height="24" width="24"><path fill="currentColor" d="M12 22a9.7 9.7 0 0 1-3.875-.788 10.1 10.1 0 0 1-3.187-2.15 10.1 10.1 0 0 1-2.15-3.187A9.7 9.7 0 0 1 2 12q0-2.075.788-3.887a10.2 10.2 0 0 1 2.15-3.175 10.1 10.1 0 0 1 3.187-2.15A9.7 9.7 0 0 1 12 2q2.076 0 3.887.788a10.2 10.2 0 0 1 3.175 2.15 10.2 10.2 0 0 1 2.15 3.175A9.65 9.65 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.875 10.1 10.1 0 0 1-2.15 3.188 10.2 10.2 0 0 1-3.175 2.15A9.65 9.65 0 0 1 12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.824-.787-1.713A15 15 0 0 1 8.05 16H5.1a8.3 8.3 0 0 0 1.813 2.175A7.2 7.2 0 0 0 9.4 19.55m5.2 0a7.2 7.2 0 0 0 2.487-1.375A8.3 8.3 0 0 0 18.9 16h-2.95q-.225.95-.562 1.837a14 14 0 0 1-.788 1.713M4.25 14h3.4a13.208 13.208 0 0 1-.15-2 13 13 0 0 1 .15-2h-3.4A7.959 7.959 0 0 0 4 12a8 8 0 0 0 .25 2m5.4 0h4.7q.075-.5.113-.988.037-.487.037-1.012a13 13 0 0 0-.15-2h-4.7q-.075.5-.113.988Q9.5 11.475 9.5 12a13 13 0 0 0 .15 2m6.7 0h3.4a7.953 7.953 0 0 0 .25-2 8 8 0 0 0-.25-2h-3.4q.075.5.112.988.038.487.038 1.012a13 13 0 0 1-.15 2m-.4-6h2.95a8.3 8.3 0 0 0-1.812-2.175A7.2 7.2 0 0 0 14.6 4.45q.45.825.787 1.712.338.888.563 1.838M10.1 8h3.8q-.3-1.1-.775-2.075A12.7 12.7 0 0 0 12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.224-.95.563-1.838.337-.887.787-1.712Q8 4.9 6.912 5.825A8.3 8.3 0 0 0 5.1 8"></path></svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketIndices;

