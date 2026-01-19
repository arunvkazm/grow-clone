import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp } from 'react-icons/fi';

const GrowwETFs = () => {
  const etfs = [
    { name: 'Groww Gold ETF', price: 142.98, change: 4.08, changePercent: 2.94, isPositive: true, logo: 'G', logoBg: 'bg-primary-500', logoColor: 'text-white' },
    { name: 'Groww Silver ETF', price: 288.19, change: 12.21, changePercent: 4.42, isPositive: true, logo: 'G', logoBg: 'bg-primary-500', logoColor: 'text-white' },
    { name: 'Groww Nifty Chemicals...', price: null, isNFO: true, nfoStatus: 'NFO Closed', logo: 'G', logoBg: 'bg-primary-500', logoColor: 'text-white' },
    { name: 'Groww Nifty Metal ETF', price: 11.03, change: 0.05, changePercent: 0.40, isPositive: true, logo: 'G', logoBg: 'bg-primary-500', logoColor: 'text-white' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>ETFs by Groww</h2>
        <Link to="/etfs/groww" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
          See all ETFs &gt;
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {etfs.map((etf, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors cursor-pointer">
            <div className="mb-3">
              <div className={`${etf.logoBg} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <span className={`text-sm font-bold ${etf.logoColor}`}>{etf.logo}</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-600 mb-2 truncate">{etf.name}</p>
            {etf.isNFO ? (
              <div>
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded font-medium">NFO</span>
                <p className="text-xs text-gray-600 mt-2">{etf.nfoStatus}</p>
              </div>
            ) : (
              <>
                <p className="text-base font-semibold text-gray-600 mb-1">₹{etf.price.toFixed(2)}</p>
                <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                  <span>+{etf.change.toFixed(2)} (+{etf.changePercent.toFixed(2)}%)</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowwETFs;

