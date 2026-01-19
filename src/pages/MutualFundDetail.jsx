// src/pages/MutualFundDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiTrendingUp, FiTrendingDown, FiInfo, FiPieChart, FiDollarSign } from 'react-icons/fi';
import MutualFundChart from '../components/mutualFunds/MutualFundChart';
import AssetAllocationPie from '../components/mutualFunds/AssetAllocationPie';
import { mutualFunds } from '../data/mutualFunds';
import toast from 'react-hot-toast';

const MutualFundDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  
  const fund = mutualFunds.find(f => f.id === parseInt(id));

  useEffect(() => {
    if (!fund) {
      toast.error('Mutual fund not found');
      navigate('/mutual-funds');
    }
  }, [fund, navigate]);

  if (!fund) {
    return null;
  }

  const isPositive = fund.changePercent >= 0;

  const returnsData = [
    { period: '1 Month', return: (fund.returns['1Y'] / 12).toFixed(2) },
    { period: '3 Months', return: (fund.returns['1Y'] / 4).toFixed(2) },
    { period: '6 Months', return: (fund.returns['1Y'] / 2).toFixed(2) },
    { period: '1 Year', return: fund.returns['1Y'].toFixed(2) },
    { period: '3 Years', return: fund.returns['3Y'].toFixed(2) },
    { period: '5 Years', return: fund.returns['5Y'].toFixed(2) },
  ];

  const calculateSIPReturns = () => {
    const monthlyRate = fund.returns['1Y'] / 100 / 12;
    const months = 60; // 5 years
    const futureValue = investmentAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const handleInvest = () => {
    toast.success(`Started SIP in ${fund.name} with ₹${investmentAmount}/month`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <button onClick={() => navigate('/mutual-funds')} className="hover:text-primary-600">
                Mutual Funds
              </button>
            </li>
            <li>/</li>
            <li className="font-medium text-gray-900">{fund.name}</li>
          </ol>
        </nav>

        {/* Fund Header */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{fund.name.charAt(0)}</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{fund.name}</h1>
                  <p className="text-gray-500">{fund.category} Fund • {fund.risk} Risk</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">₹{fund.nav.toFixed(2)}</div>
                <div className="text-sm text-gray-500">Current NAV</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isPositive ? '+' : ''}{fund.changePercent.toFixed(2)}%
                </div>
                <div className="text-sm text-gray-500">Change</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">{fund.aum}</div>
                <div className="text-sm text-gray-500">AUM</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">{fund.expenseRatio}%</div>
                <div className="text-sm text-gray-500">Expense Ratio</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* NAV Chart */}
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">NAV Performance</h2>
              <MutualFundChart />
            </div>

            {/* Returns Table */}
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Returns</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Period</th>
                      <th className="text-right py-3 px-4 text-gray-600 font-medium">Returns</th>
                      <th className="text-right py-3 px-4 text-gray-600 font-medium">Category Avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {returnsData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-0">
                        <td className="py-3 px-4 text-gray-700">{row.period}</td>
                        <td className="py-3 px-4 text-right font-medium text-green-600">
                          +{row.return}%
                        </td>
                        <td className="py-3 px-4 text-right text-gray-500">
                          +{(parseFloat(row.return) * 0.9).toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Investment Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Asset Allocation */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Asset Allocation</h2>
                <div className="h-64">
                  <AssetAllocationPie data={fund.assetAllocation} />
                </div>
              </div>

              {/* SIP Calculator */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">SIP Calculator</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Investment (₹)
                    </label>
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(parseInt(e.target.value) || 10000)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <div className="flex justify-between mt-2">
                      {[5000, 10000, 20000, 50000].map(amount => (
                        <button
                          key={amount}
                          onClick={() => setInvestmentAmount(amount)}
                          className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        >
                          ₹{amount.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Total Investment (5 years)</span>
                      <span className="font-semibold">
                        ₹{(investmentAmount * 60).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Value</span>
                      <span className="text-xl font-bold text-green-600">
                        ₹{calculateSIPReturns().toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleInvest}
                    className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                  >
                    Start SIP
                  </button>
                </div>
              </div>

              {/* Fund Details */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Fund Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fund Manager</span>
                    <span className="font-medium">XYZ Capital</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Launch Date</span>
                    <span className="font-medium">15 Jan 2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum SIP</span>
                    <span className="font-medium">₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exit Load</span>
                    <span className="font-medium">1% (if exited within 1 year)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fund Description */}
        <div className="mt-8 bg-white rounded-xl shadow-card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About this Fund</h2>
          <p className="text-gray-600 mb-4">{fund.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Investment Objective</h3>
              <p className="text-gray-600">
                The primary investment objective of the scheme is to generate long-term capital appreciation 
                by investing predominantly in equity and equity-related instruments of companies across 
                market capitalizations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Suitable For</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Investors seeking long-term wealth creation</li>
                <li>Those with moderate to high risk appetite</li>
                <li>Investors looking to diversify equity portfolio</li>
                <li>SIP investors with 5+ years horizon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundDetail;