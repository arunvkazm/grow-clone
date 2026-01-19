// src/pages/MutualFunds.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { mutualFunds } from '../data/mutualFunds';
import MutualFundCard from '../components/mutualFunds/MutualFundCard';

const MutualFunds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...new Set(mutualFunds.map(fund => fund.category))];
  const riskLevels = ['all', 'low', 'moderate', 'high'];

  const filteredFunds = useMemo(() => {
    return mutualFunds
      .filter(fund => {
        const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || fund.category === categoryFilter;
        const matchesRisk = riskFilter === 'all' || fund.risk.toLowerCase() === riskFilter;
        return matchesSearch && matchesCategory && matchesRisk;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'returns':
            return b.returns['1Y'] - a.returns['1Y'];
          case 'nav':
            return b.nav - a.nav;
          case 'aum':
            // Simple string comparison - in real app, parse AUM values
            return b.aum.localeCompare(a.aum);
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchTerm, categoryFilter, riskFilter, sortBy]);

  const getCategoryStats = (category) => {
    const fundsInCategory = mutualFunds.filter(fund => 
      category === 'all' || fund.category === category
    );
    const avgReturn = fundsInCategory.length > 0
      ? fundsInCategory.reduce((sum, fund) => sum + fund.returns['1Y'], 0) / fundsInCategory.length
      : 0;
    
    return {
      count: fundsInCategory.length,
      avgReturn: avgReturn.toFixed(2)
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mutual Funds</h1>
          <p className="text-gray-600">Invest in professionally managed funds</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search mutual funds..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort and Filter */}
            <div className="flex gap-4">
              <select
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="returns">Sort by Returns</option>
                <option value="nav">Sort by NAV</option>
                <option value="aum">Sort by AUM</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center gap-2"
              >
                <FiFilter />
                Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setCategoryFilter(category)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          categoryFilter === category
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Risk Filter */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Risk Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {riskLevels.map(risk => (
                      <button
                        key={risk}
                        onClick={() => setRiskFilter(risk)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          riskFilter === risk
                            ? getRiskButtonStyle(risk, true)
                            : getRiskButtonStyle(risk, false)
                        }`}
                      >
                        {risk.charAt(0).toUpperCase() + risk.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Equity', 'Hybrid', 'Debt'].map(category => {
            const stats = getCategoryStats(category);
            return (
              <div key={category} className="bg-white rounded-xl shadow-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{category} Funds</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.count}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center text-green-600">
                      <FiTrendingUp className="mr-1" />
                      <span className="font-semibold">+{stats.avgReturn}%</span>
                    </div>
                    <p className="text-sm text-gray-500">Avg 1Y Return</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mutual Funds Grid */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
              <div className="col-span-5">Fund Name</div>
              <div className="col-span-2 text-right">NAV</div>
              <div className="col-span-2 text-right">1Y Return</div>
              <div className="col-span-3 text-right">Risk</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredFunds.map((fund) => (
              <MutualFundCard key={fund.id} fund={fund} />
            ))}
          </div>

          {filteredFunds.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No mutual funds found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const getRiskButtonStyle = (risk, isActive) => {
  const baseStyle = 'px-3 py-1 rounded-full text-sm font-medium transition-colors ';
  
  if (!isActive) {
    return baseStyle + 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  }

  switch (risk) {
    case 'low':
      return baseStyle + 'bg-green-500 text-white';
    case 'moderate':
      return baseStyle + 'bg-yellow-500 text-white';
    case 'high':
      return baseStyle + 'bg-red-500 text-white';
    default:
      return baseStyle + 'bg-primary-500 text-white';
  }
};

export default MutualFunds;