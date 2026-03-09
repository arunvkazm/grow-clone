import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

const FuturesAndOptions = () => {
  const indices = [
    { name: 'Nifty 50', value: '24,150.75', change: '+0.85%', changeType: 'up' },
    { name: 'Bank Nifty', value: '52,340.20', change: '+1.12%', changeType: 'up' },
    { name: 'Nifty Midcap', value: '12,890.50', change: '-0.32%', changeType: 'down' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Futures & Options</h1>
          <p className="text-gray-600">Trade in F&O with advanced tools and low brokerage</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/positions"
            className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all"
          >
            <div className="p-3 bg-primary-50 rounded-lg mr-4">
              <FiBarChart2 className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Positions</h3>
              <p className="text-sm text-gray-500">View your open F&O positions</p>
            </div>
          </Link>
          <Link
            to="/orders"
            className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all"
          >
            <div className="p-3 bg-primary-50 rounded-lg mr-4">
              <FiTrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Orders</h3>
              <p className="text-sm text-gray-500">Track your F&O order history</p>
            </div>
          </Link>
          <Link
            to="/balance"
            className="flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all"
          >
            <div className="p-3 bg-primary-50 rounded-lg mr-4">
              <FiZap className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Balance</h3>
              <p className="text-sm text-gray-500">Add funds for F&O trading</p>
            </div>
          </Link>
        </div>

        {/* F&O Indices */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">F&O Indices</h2>
            <p className="text-sm text-gray-500">Live index values</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {indices.map((index) => (
                <div
                  key={index.name}
                  className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <p className="text-sm text-gray-500 mb-1">{index.name}</p>
                  <p className="text-xl font-bold text-gray-900">{index.value}</p>
                  <p className={`text-sm font-medium ${index.changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {index.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
          <h3 className="font-semibold text-gray-900 mb-2">Trade Futures & Options on Groww</h3>
          <p className="text-gray-600 text-sm mb-4">
            Access F&O trading on NSE and BSE. Trade in index futures, stock futures, index options, and stock options with margin facility and intraday square-off.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Explore & Trade
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FuturesAndOptions;
