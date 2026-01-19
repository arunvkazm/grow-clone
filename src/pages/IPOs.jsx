// src/pages/IPOs.jsx
import React, { useState } from 'react';
import { FiCalendar, FiTrendingUp, FiDollarSign, FiInfo, FiArrowRight } from 'react-icons/fi';
import { ipos } from '../data/ipos';

const IPOs = () => {
  const [filter, setFilter] = useState('all');
  const [selectedIpo, setSelectedIpo] = useState(null);

  const filteredIpos = filter === 'all'
    ? ipos
    : ipos.filter(ipo => ipo.status.toLowerCase() === filter.toLowerCase());

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Closed':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Initial Public Offerings (IPOs)</h1>
          <p className="text-gray-600">Discover and invest in upcoming and open IPOs</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total IPOs</p>
                <p className="text-2xl font-bold text-gray-900">{ipos.length}</p>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <FiDollarSign className="h-6 w-6 text-primary-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Open Now</p>
                <p className="text-2xl font-bold text-green-600">
                  {ipos.filter(i => i.status === 'Open').length}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <FiTrendingUp className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Upcoming</p>
                <p className="text-2xl font-bold text-blue-600">
                  {ipos.filter(i => i.status === 'Upcoming').length}
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <FiCalendar className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Issue Size</p>
                <p className="text-2xl font-bold text-gray-600">₹9,700 Cr</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <FiDollarSign className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex flex-wrap gap-2">
            {['all', 'open', 'upcoming', 'closed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* IPOs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredIpos.map((ipo) => (
            <div
              key={ipo.id}
              className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{ipo.companyName}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(ipo.status)}`}>
                        {ipo.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Symbol: {ipo.symbol}</p>
                    <p className="text-sm text-gray-600">{ipo.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Issue Size</p>
                    <p className="font-semibold text-gray-900">{ipo.issueSize}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900">{ipo.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Min Investment</p>
                    <p className="font-semibold text-gray-900">{ipo.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Lot Size</p>
                    <p className="font-semibold text-gray-900">{ipo.lotSize} shares</p>
                  </div>
                </div>

                {ipo.gmp && (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-700">GMP (Grey Market Premium)</span>
                      <span className="text-lg font-bold text-green-600">{ipo.gmp}</span>
                    </div>
                  </div>
                )}

                {ipo.subscription && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-700">Subscription</span>
                      <span className="text-lg font-bold text-blue-600">{ipo.subscription}</span>
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500 mb-1">
                        <FiCalendar className="h-4 w-4" />
                        <span>Issue Date</span>
                      </div>
                      <p className="font-semibold text-gray-900">{formatDate(ipo.issueDate)}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500 mb-1">
                        <FiCalendar className="h-4 w-4" />
                        <span>Listing Date</span>
                      </div>
                      <p className="font-semibold text-gray-900">{formatDate(ipo.listingDate)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex space-x-3">
                  {ipo.status === 'Open' && (
                    <button className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold">
                      Apply Now
                    </button>
                  )}
                  {ipo.status === 'Upcoming' && (
                    <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                      Set Reminder
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedIpo(ipo)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FiInfo className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredIpos.length === 0 && (
          <div className="bg-white rounded-xl shadow-card p-12 text-center">
            <FiCalendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No IPOs found</h3>
            <p className="text-gray-600">There are no IPOs matching your selected filter</p>
          </div>
        )}

        {/* IPO Detail Modal */}
        {selectedIpo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedIpo.companyName}</h2>
                    <p className="text-gray-600">{selectedIpo.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedIpo(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiArrowRight className="h-6 w-6 transform rotate-45" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Issue Size</p>
                    <p className="text-lg font-bold text-gray-900">{selectedIpo.issueSize}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Price Range</p>
                    <p className="text-lg font-bold text-gray-900">{selectedIpo.priceRange}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Lot Size</p>
                    <p className="text-lg font-bold text-gray-900">{selectedIpo.lotSize} shares</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Min Investment</p>
                    <p className="text-lg font-bold text-gray-900">{selectedIpo.minInvestment}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Important Dates</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Issue Date</span>
                        <span className="font-semibold">{formatDate(selectedIpo.issueDate)}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Listing Date</span>
                        <span className="font-semibold">{formatDate(selectedIpo.listingDate)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                    <p className="text-gray-600">{selectedIpo.category}</p>
                  </div>
                </div>

                <div className="mt-6">
                  {selectedIpo.status === 'Open' && (
                    <button className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold">
                      Apply for IPO
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IPOs;

