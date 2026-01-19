import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import CompanyLogo from '../common/CompanyLogo';

const TopMarketMovers = () => {
  const [activeTab, setActiveTab] = useState('Gainers');
  const [selectedIndex, setSelectedIndex] = useState('NIFTY 100');


  const gainers = [
    { 
      name: 'CG Power & Inds', 
      price: 589.10, 
      change: 27.40, 
      changePercent: 4.88, 
      volume: '1,69,53,030'
    },
    { 
      name: 'Interglobe Aviation', 
      price: 4946.00, 
      change: 206.00, 
      changePercent: 4.35, 
      volume: '21,05,230'
    },
    { 
      name: 'Hindustan Zinc', 
      price: 662.75, 
      change: 25.00, 
      changePercent: 3.92, 
      volume: '1,59,54,373'
    },
    { 
      name: 'Tech Mahindra', 
      price: 1718.60, 
      change: 48.10, 
      changePercent: 2.88, 
      volume: '98,80,793'
    },
    { 
      name: 'Kotak Mahindra Bank', 
      price: 427.10, 
      change: 8.90, 
      changePercent: 2.13, 
      volume: '2,09,87,593'
    },
    { 
      name: 'Hindustan Unilever', 
      price: 2410.70, 
      change: 50.30, 
      changePercent: 2.13, 
      volume: '14,14,280'
    },
  ];

  const losers = [
    { 
      name: 'Adani Enterprises', 
      price: 2456.80, 
      change: -125.40, 
      changePercent: -4.86, 
      volume: '2,45,67,890'
    },
    { 
      name: 'Tata Motors', 
      price: 678.50, 
      change: -28.75, 
      changePercent: -4.07, 
      volume: '1,89,45,230'
    },
    { 
      name: 'Vedanta Limited', 
      price: 342.25, 
      change: -13.50, 
      changePercent: -3.79, 
      volume: '3,12,45,678'
    },
    { 
      name: 'JSW Steel', 
      price: 789.40, 
      change: -28.90, 
      changePercent: -3.53, 
      volume: '1,56,78,901'
    },
    { 
      name: 'Tata Steel', 
      price: 123.75, 
      change: -4.25, 
      changePercent: -3.32, 
      volume: '4,23,56,789'
    },
    { 
      name: 'Hindalco Industries', 
      price: 456.30, 
      change: -14.20, 
      changePercent: -3.02, 
      volume: '1,34,56,789'
    },
  ];

  const volumeShockers = [
    { 
      name: 'Reliance Industries', 
      price: 2456.75, 
      change: 45.25, 
      changePercent: 1.88, 
      volume: '5,67,89,234'
    },
    { 
      name: 'State Bank of India', 
      price: 567.80, 
      change: 9.45, 
      changePercent: 1.69, 
      volume: '4,89,12,345'
    },
    { 
      name: 'ICICI Bank', 
      price: 987.65, 
      change: 15.20, 
      changePercent: 1.56, 
      volume: '4,56,78,901'
    },
    { 
      name: 'HDFC Bank', 
      price: 1678.90, 
      change: 23.45, 
      changePercent: 1.42, 
      volume: '4,23,45,678'
    },
    { 
      name: 'Tata Consultancy Services', 
      price: 3345.50, 
      change: -12.75, 
      changePercent: -0.38, 
      volume: '3,78,90,123'
    },
    { 
      name: 'Infosys', 
      price: 1456.25, 
      change: 34.75, 
      changePercent: 2.45, 
      volume: '3,45,67,890'
    },
  ];

  // Generate sparkline data based on trend (upward for gainers, downward for losers, mixed for volume)
  const generateSparklineData = (trend = 'up') => {
    if (trend === 'up') {
      return Array.from({ length: 20 }, (_, i) => ({
        value: 50 + Math.random() * 20 + (i * 2)
      }));
    } else if (trend === 'down') {
      return Array.from({ length: 20 }, (_, i) => ({
        value: 100 - Math.random() * 20 - (i * 2)
      }));
    } else {
      return Array.from({ length: 20 }, (_, i) => ({
        value: 50 + Math.random() * 50 + Math.sin(i) * 10
      }));
    }
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case 'Gainers':
        return gainers;
      case 'Losers':
        return losers;
      case 'Volume shockers':
        return volumeShockers;
      default:
        return gainers;
    }
  };

  const getSparklineColor = () => {
    switch (activeTab) {
      case 'Gainers':
        return '#10b981'; // green
      case 'Losers':
        return '#ef4444'; // red
      case 'Volume shockers':
        return '#3b82f6'; // blue
      default:
        return '#10b981';
    }
  };

  const getSparklineTrend = () => {
    switch (activeTab) {
      case 'Gainers':
        return 'up';
      case 'Losers':
        return 'down';
      case 'Volume shockers':
        return 'mixed';
      default:
        return 'up';
    }
  };

  const tabs = ['Gainers', 'Losers', 'Volume shockers'];
  const currentData = getCurrentData();
  const sparklineData = generateSparklineData(getSparklineTrend());
  const sparklineColor = getSparklineColor();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold" style={{ color: '#44475b' }}>Top market movers</h2>
          <select
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          >
            <option>NIFTY 100</option>
            <option>NIFTY 500</option>
            <option>NIFTY 50</option>
          </select>
        </div>
        <Link to="/stocks" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
          See more &gt;
        </Link>
      </div>
      
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
              activeTab === tab
                ? 'text-gray-900 bg-gray-200 border border-gray-900'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200 mb-2">
        <div className="col-span-5">Company</div>
        <div className="col-span-4 text-right">Market price (1D)</div>
        <div className="col-span-3 text-right">Volume</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-1">
        {currentData.map((stock, index) => {
          const isPositive = stock.changePercent >= 0;
          const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
          
          return (
            <div key={index} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer items-center">
              {/* Company Column */}
              <div className="col-span-5 flex items-center space-x-3">
                <CompanyLogo companyName={stock.name} className="w-10 h-10 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-600 truncate">{stock.name}</p>
                </div>
                {/* Sparkline */}
                <div className="w-16 h-8 flex-shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={sparklineColor} 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Market Price Column */}
              <div className="col-span-4 text-right">
                <p className="text-sm font-semibold text-gray-600">₹{stock.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                <p className={`text-xs font-medium ${changeColor}`}>
                  {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                </p>
              </div>
              
              {/* Volume Column */}
              <div className="col-span-3 text-right">
                <p className="text-xs text-gray-600">{stock.volume}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopMarketMovers;

