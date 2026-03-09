import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown, FiArrowLeft, FiX, FiChevronRight } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import Footer from '../components/layout/Footer';
import { useTransactions } from '../hooks/useTransactions';

const AllTransactions = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [monthsRange, setMonthsRange] = useState(1); // 1 or 2 months
  const { getTransactionsByMonths } = useTransactions();
  const transactions = getTransactionsByMonths(monthsRange);

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  // Group transactions by month
  const groupedByMonth = transactions.reduce((acc, tx) => {
    const date = new Date(tx.date);
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
    const monthLabel = date.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    if (!acc[monthKey]) {
      acc[monthKey] = { label: monthLabel, transactions: [] };
    }
    acc[monthKey].transactions.push(tx);
    return acc;
  }, {});

  // Sort months descending (newest first)
  const sortedMonths = Object.entries(groupedByMonth).sort((a, b) => b[0].localeCompare(a[0]));

  const rangeStartDate = new Date();
  rangeStartDate.setMonth(rangeStartDate.getMonth() - monthsRange);
  const periodLabel = `${rangeStartDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} - ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6 flex-1">
              <GrowwLogo size="md" showStocks={true} />
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/stocks" className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1">
                  Stocks
                </Link>
                <Link to="/futures-and-options" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  F&O
                </Link>
                <Link to="/mutual-funds" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Mutual Funds
                </Link>
                <div className="relative" onMouseEnter={() => setShowMoreMenu(true)} onMouseLeave={() => setShowMoreMenu(false)}>
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center space-x-1">
                    <span>More</span>
                    <FiChevronDown className="h-4 w-4" />
                  </button>
                  {showMoreMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <Link to="/ipos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">IPOs</Link>
                      <Link to="/bonds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bonds</Link>
                      <Link to="/commodities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Commodities</Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search Groww..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FiX className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <FiBell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  4
                </span>
              </button>
              
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link & Header */}
        <div className="mb-6">
          <Link to="/balance" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mb-4">
            <FiArrowLeft className="h-4 w-4 mr-2" />
            Back to Balance
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">All transactions</h1>
          <p className="text-sm text-gray-600">Transactions from last {monthsRange} month{monthsRange > 1 ? 's' : ''} ({periodLabel})</p>
        </div>

        {/* Transactions List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {transactions.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600 mb-2">No transactions in the last {monthsRange} month{monthsRange > 1 ? 's' : ''}</p>
              <Link to="/balance" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Go to Balance
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {sortedMonths.map(([monthKey, { label, transactions: monthTx }]) => (
                <div key={monthKey}>
                  <div className="px-4 py-3 bg-gray-50">
                    <h2 className="text-sm font-semibold text-gray-700">{label}</h2>
                  </div>
                  {monthTx.map((tx) => (
                    <div
                      key={tx.id}
                      className="px-4 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {tx.type === 'credit' ? 'Add money' : 'Withdrawal'}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {formatDate(tx.date)}
                          </p>
                          {tx.bankAccount && (
                            <p className="text-xs text-gray-500 mt-0.5">{tx.bankAccount}</p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className={`text-sm font-semibold ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {tx.type === 'credit' ? '+' : '-'}₹{formatCurrency(tx.amount)}
                          </p>
                          <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded ${
                            tx.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {tx.status === 'completed' ? 'Completed' : 'Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* See more transactions button */}
        {monthsRange === 1 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setMonthsRange(2)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              See more transactions
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllTransactions;
