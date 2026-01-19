import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown, FiMinus } from 'react-icons/fi';
import CompanyLogo from '../common/CompanyLogo';

const StocksInNews = () => {
  const news = [
    { 
      stock: 'Interglobe Aviation', 
      change: 3.97, 
      isPositive: true,
      headline: '8 orders from DGCA',
      logo: 'I',
      logoBg: 'bg-blue-100',
      logoColor: 'text-blue-600'
    },
    { 
      stock: 'Axis Bank', 
      change: -3.85, 
      isPositive: false,
      headline: 'Black trade of shares',
      logo: 'A',
      logoBg: 'bg-indigo-100',
      logoColor: 'text-indigo-600'
    },
    { 
      stock: 'Indobell Insulations', 
      change: 0.00, 
      isPositive: null,
      headline: 'Contract from BHEL',
      logo: 'I',
      logoBg: 'bg-gray-100',
      logoColor: 'text-gray-600'
    },
    { 
      stock: 'MRPL', 
      change: -4.75, 
      isPositive: false,
      headline: 'Q3 2026 earnings call',
      logo: 'M',
      logoBg: 'bg-red-100',
      logoColor: 'text-red-600'
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Stocks in news today</h2>
        <Link to="/news" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
          See more news &gt;
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {news.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
            <div className="mb-3">
              <CompanyLogo companyName={item.stock} className="w-10 h-10" />
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <p className="text-sm font-semibold text-gray-900 flex-1 truncate">{item.stock}</p>
              {item.isPositive !== null && (
                <div className={`flex items-center space-x-1 ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="text-xs font-medium">
                    {item.isPositive ? '+' : ''}{item.change.toFixed(2)}%
                  </span>
                </div>
              )}
              {item.isPositive === null && (
                <div className="flex items-center space-x-1 text-gray-500">
                  <span className="text-xs font-medium">{item.change.toFixed(2)}%</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-600">{item.headline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StocksInNews;

