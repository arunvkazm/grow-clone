import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const MostBoughtETFs = () => {
  const etfs = [
    { name: 'Tata Gold Exchange Trade...', price: 14.10, change: 0.29, changePercent: 2.10, isPositive: true, logo: 'TATA', isTata: true },
    { name: 'Nippon India Silver ETF', price: 280.20, change: 10.76, changePercent: 3.90, isPositive: true, logo: 'N', logoBg: 'bg-blue-100', logoColor: 'text-blue-600' },
    { name: 'Motilal Oswal MOST Shares...', price: 233.88, change: -1.66, changePercent: -0.70, isPositive: false, logo: 'MO', logoBg: 'bg-purple-100', logoColor: 'text-purple-600' },
    { name: 'Nippon India ETF Nifty 50 BeES', price: 280.80, change: -1.24, changePercent: -0.43, isPositive: false, logo: 'N', logoBg: 'bg-indigo-100', logoColor: 'text-indigo-600' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Most bought ETFs</h2>
        <Link to="/etfs" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
          See all ETFs &gt;
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {etfs.map((etf, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
            <div className="mb-3">
              {etf.isTata ? (
                <div className="bg-white border border-gray-200 rounded px-2 py-1 inline-block">
                  <p className="text-xs font-semibold text-green-600">TATA mutual fund</p>
                </div>
              ) : (
                <div className={`${etf.logoBg} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${etf.logoColor}`}>{etf.logo}</span>
                </div>
              )}
            </div>
            <p className="text-sm font-semibold mb-2 truncate" style={{ color: '#04b488' }}>{etf.name}</p>
            <p className="text-base font-semibold text-gray-600 mb-1">₹{etf.price.toFixed(2)}</p>
            <div className={`flex items-center space-x-1 text-sm font-medium ${etf.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <span>{etf.isPositive ? '+' : ''}{etf.change.toFixed(2)} ({etf.isPositive ? '+' : ''}{etf.changePercent.toFixed(2)}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostBoughtETFs;

