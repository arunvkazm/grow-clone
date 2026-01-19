import React from 'react';
import { Link } from 'react-router-dom';

const SectorsTrending = () => {
  const sectors = [
    { 
      name: 'Air Transport', 
      change: 4.13, 
      isPositive: true, 
      gainers: 1, 
      losers: 5
    },
    { 
      name: 'Non-Ferrous Metals', 
      change: 1.89, 
      isPositive: true, 
      gainers: 16, 
      losers: 30
    },
    { 
      name: 'Cables', 
      change: 1.64, 
      isPositive: true, 
      gainers: 7, 
      losers: 23
    },
    { 
      name: 'Education', 
      change: -3.37, 
      isPositive: false, 
      gainers: 5, 
      losers: 21
    },
    { 
      name: 'Brokers', 
      change: -3.60, 
      isPositive: false, 
      gainers: 23, 
      losers: 27
    },
    { 
      name: 'Shipbuilding', 
      change: -4.14, 
      isPositive: false, 
      gainers: 1, 
      losers: 5
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Sectors trending today</h2>
        <Link to="/sectors" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
          See all sectors &gt;
        </Link>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200 mb-2">
        <div className="col-span-4">Sector</div>
        <div className="col-span-5">Gainers/Losers</div>
        <div className="col-span-3 text-right">1D price change</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-1">
        {sectors.map((sector, index) => {
          const total = sector.gainers + sector.losers;
          const gainerPercent = (sector.gainers / total) * 100;
          const loserPercent = (sector.losers / total) * 100;
          
          return (
            <div key={index} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer items-center">
              {/* Sector Column */}
              <div className="col-span-4 flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center text-gray-600">
                  {sector.name === 'Air Transport' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                  )}
                  {sector.name === 'Non-Ferrous Metals' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  )}
                  {sector.name === 'Cables' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C6.44 13.29 7 12.5 7 11.5 7 10.12 5.88 9 4.5 9S2 10.12 2 11.5c0 .84.5 1.56 1.22 1.88.72.32 1.28.62 1.28 1.12 0 .55-.45 1-1 1s-1-.45-1-1H1c0 1.1.9 2 2 2s2-.9 2-2c0-.84-.5-1.56-1.22-1.88C3.28 12.32 2.72 12.02 2.72 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .5-.28.94-.72 1.22-.44.28-.78.78-.78 1.28 0 1.1.9 2 2 2h1l-1 7z"/>
                    </svg>
                  )}
                  {sector.name === 'Education' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                    </svg>
                  )}
                  {sector.name === 'Brokers' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                  {sector.name === 'Shipbuilding' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900">{sector.name}</p>
              </div>
              
              {/* Gainers/Losers Column */}
              <div className="col-span-5 flex items-center space-x-2">
                <div className="flex-1 flex items-center space-x-2">
                  <span className="text-xs text-gray-600 min-w-[20px]">{sector.gainers}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-green-500 h-full" 
                      style={{ width: `${gainerPercent}%` }}
                    ></div>
                    <div 
                      className="bg-red-500 h-full" 
                      style={{ width: `${loserPercent}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 min-w-[20px]">{sector.losers}</span>
                </div>
              </div>
              
              {/* 1D Price Change Column */}
              <div className="col-span-3 text-right">
                <span className={`text-sm font-semibold ${sector.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {sector.isPositive ? '+' : ''}{sector.change.toFixed(2)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectorsTrending;

