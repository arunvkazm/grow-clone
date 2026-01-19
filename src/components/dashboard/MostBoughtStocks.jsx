import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp } from 'react-icons/fi';
import CompanyLogo from '../common/CompanyLogo';

const MostBoughtStocks = () => {
  const stocks = [
    { 
      symbol: 'Bharat Coking Coal', 
      price: 41.00, 
      change: 18.00, 
      changePercent: 78.26,
      logo: 'B',
      logoBg: 'bg-blue-100',
      logoColor: 'text-blue-600'
    },
    { 
      symbol: 'TATSILV', 
      price: 29.37, 
      change: 2.10, 
      changePercent: 7.70,
      logo: 'TATA',
      logoBg: 'bg-white',
      logoColor: 'text-green-600',
      isTata: true
    },
    { 
      symbol: 'TATAGOLD', 
      price: 14.11, 
      change: 0.30, 
      changePercent: 2.17,
      logo: 'TATA',
      logoBg: 'bg-white',
      logoColor: 'text-green-600',
      isTata: true
    },
    { 
      symbol: 'SILVERBEES', 
      price: 283.02, 
      change: 13.58, 
      changePercent: 5.04,
      logo: 'S',
      logoBg: 'bg-red-500',
      logoColor: 'text-white',
      isDiamond: true
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Most bought stocks on Groww</h2>
        <Link to="/stocks" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
          See more &gt;
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stocks.map((stock, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
            {/* Logo */}
            <div className="mb-3">
              {stock.isTata ? (
                <div className={`${stock.logoBg} border border-gray-200 rounded px-2 py-1 inline-block`}>
                  <p className={`text-xs font-semibold ${stock.logoColor}`}>TATA mutual fund</p>
                </div>
              ) : (
                <CompanyLogo companyName={stock.symbol} className="w-10 h-10" />
              )}
            </div>
            
            {/* Stock Name */}
            <p className="text-sm font-semibold text-gray-600 mb-2">{stock.symbol}</p>
            
            {/* Price */}
            <p className="text-base font-semibold text-gray-600 mb-1">₹{stock.price.toFixed(2)}</p>
            
            {/* Change */}
            <div className="flex items-center space-x-1 text-green-600">
              <span className="text-sm font-medium">
                {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostBoughtStocks;

