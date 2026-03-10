import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import Footer from '../components/layout/Footer';
import { useAuth } from '../hooks/useAuth';
import idbilogo from "../assets/idbi.webp"

const IFSC = 'IBKL0001576';
const BRANCH = 'Nallasopara (East)';
const ACCOUNT_NUMBER = '1576104000101981';

const BankDetails = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const formatAccountNumber = (num) => {
    return num.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6 flex-1">
              <GrowwLogo size="md" showStocks={true} />
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/stocks" className="text-sm font-medium text-gray-700 hover:text-gray-900">Stocks</Link>
                <Link to="/futures-and-options" className="text-sm font-medium text-gray-700 hover:text-gray-900">F&O</Link>
                <Link to="/mutual-funds" className="text-sm font-medium text-gray-700 hover:text-gray-900">Mutual Funds</Link>
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
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search Groww..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <FiBell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">4</span>
              </button>
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Bank Details</h1>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="w-full flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-2">
                <img
                  src={idbilogo}
                  alt="IDBI Bank"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-1 w-full space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Bank Name</p>
                  <p className="text-lg font-semibold text-gray-900 mt-0.5">IDBI Bank</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Account Number</p>
                  <p className="text-lg font-mono font-semibold text-gray-900 mt-0.5 tracking-wider">
                    {formatAccountNumber(ACCOUNT_NUMBER)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">IFSC Code</p>
                  <p className="text-lg font-mono font-semibold text-gray-900 mt-0.5">{IFSC}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Branch</p>
                  <p className="text-lg font-semibold text-gray-900 mt-0.5">{BRANCH}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BankDetails;
