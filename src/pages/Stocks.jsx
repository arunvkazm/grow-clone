// src/pages/Stocks.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiTrendingUp, FiTrendingDown, FiFilter } from 'react-icons/fi';
import { stocks } from '../data/stocks';
import StockCard from '../components/stocks/StockCard';

const Stocks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterSector, setFilterSector] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const sectors = ['all', ...new Set(stocks.map(stock => stock.sector))];

  const filteredStocks = useMemo(() => {
    return stocks
      .filter(stock => {
        const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = filterSector === 'all' || stock.sector === filterSector;
        return matchesSearch && matchesSector;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price':
            return b.price - a.price;
          case 'change':
            return b.changePercent - a.changePercent;
          case 'marketCap':
            // Simple comparison - in real app, parse the market cap values
            return b.marketCap.localeCompare(a.marketCap);
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchTerm, sortBy, filterSector]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Stocks</h1>
          <p className="text-gray-600">Invest in shares of Indian companies</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stocks by name or symbol..."
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
                <option value="price">Sort by Price</option>
                <option value="change">Sort by Change %</option>
                <option value="marketCap">Sort by Market Cap</option>
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

          {/* Sector Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">Filter by Sector</h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map(sector => (
                  <button
                    key={sector}
                    onClick={() => setFilterSector(sector)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filterSector === sector
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sector.charAt(0).toUpperCase() + sector.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Market Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Stocks</p>
                <p className="text-2xl font-bold text-gray-900">{stocks.length}</p>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <FiTrendingUp className="h-6 w-6 text-primary-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg Daily Change</p>
                <p className="text-2xl font-bold text-green-600">+1.24%</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <FiTrendingUp className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Top Sector</p>
                <p className="text-2xl font-bold text-gray-900">IT</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiTrendingUp className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Stocks Grid */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
              <div className="col-span-5">Stock</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Change</div>
              <div className="col-span-3 text-right">Market Cap</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredStocks.map((stock) => (
              <StockCard key={stock.id} stock={stock} />
            ))}
          </div>

          {filteredStocks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No stocks found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stocks;