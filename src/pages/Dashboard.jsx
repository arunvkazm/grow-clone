// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { FiTrendingUp, FiTrendingDown, FiPieChart, FiDollarSign } from 'react-icons/fi';
import PortfolioChart from '../components/dashboard/PortfolioChart';
import HoldingsTable from '../components/dashboard/HoldingsTable';
import AssetAllocation from '../components/dashboard/AssetAllocation';
import { portfolioData } from '../data/portfolio';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('1Y');

  const totalInvestment = portfolioData.totalInvestment;
  const currentValue = portfolioData.currentValue;
  const totalGain = currentValue - totalInvestment;
  const gainPercentage = ((totalGain / totalInvestment) * 100).toFixed(2);

  const stats = [
    {
      title: 'Total Investment',
      value: `₹${totalInvestment.toLocaleString('en-IN')}`,
      icon: FiDollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Current Value',
      value: `₹${currentValue.toLocaleString('en-IN')}`,
      icon: FiTrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Gain/Loss',
      value: `₹${Math.abs(totalGain).toLocaleString('en-IN')}`,
      change: `${totalGain >= 0 ? '+' : ''}${gainPercentage}%`,
      icon: totalGain >= 0 ? FiTrendingUp : FiTrendingDown,
      color: totalGain >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: totalGain >= 0 ? 'bg-green-50' : 'bg-red-50'
    },
    {
      title: 'Asset Allocation',
      value: `${portfolioData.holdings.length} Holdings`,
      icon: FiPieChart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your investments and portfolio performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color} mt-1`}>
                    {stat.value}
                  </p>
                  {stat.change && (
                    <p className={`text-sm ${stat.color} mt-1`}>
                      {stat.change}
                    </p>
                  )}
                </div>
                <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Portfolio Performance</h2>
                <div className="flex space-x-2">
                  {['1M', '3M', '6M', '1Y', 'ALL'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        timeRange === range
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <PortfolioChart timeRange={timeRange} />
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Asset Allocation</h2>
              <AssetAllocation />
            </div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Your Holdings</h2>
            </div>
            <HoldingsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;