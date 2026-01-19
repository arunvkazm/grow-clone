import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiDownload, FiSearch, FiBell, FiChevronDown, FiPrinter } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';
import MarketIndices from '../components/dashboard/MarketIndices';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import Footer from '../components/layout/Footer';

const FNOPnLReport = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const isActive = location.pathname === '/fno-pnl-report';

  // Client Information
  const clientName = 'Wasim Anish Khan';
  const clientCode = '0519114944';
  const statementPeriod = 'P&L Statement for Futures & Options from 01 Oct 2025 to 18 Jan 2026';

  // Realised P&L Data
  const realisedPnL = {
    futures: 0,
    options: -839729.5,
    total: -839729.5
  };

  // Charges Data
  const charges = {
    exchangeTransactionCharges: 7310.96,
    sebiTurnoverCharges: 22.08,
    stt: 10619,
    stampDuty: 344,
    ipftCharges: 26.87,
    brokerage: 4160,
    totalGST: 2073.58,
    total: 24556.49
  };

  // Sample trades data (empty as per image)
  const futuresTrades = [];
  const optionsTrades = [];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

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
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <FiBell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <ProfileDropdown />
            </div>
          </div>

          {/* Secondary Nav Links */}
          <div className="h-12 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <Link to="/explore" className="text-sm font-medium text-gray-700 hover:text-gray-900">Explore</Link>
              <Link to="/holdings" className="text-sm font-medium text-gray-700 hover:text-gray-900">Holdings</Link>
              <Link to="/positions" className="text-sm font-medium text-gray-700 hover:text-gray-900">Positions</Link>
              <Link to="/orders" className="text-sm font-medium text-gray-700 hover:text-gray-900">Orders</Link>
              <Link to="/watchlist" className="text-sm font-medium text-gray-700 hover:text-gray-900">Watchlist</Link>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">
                <span>0</span>
                <span>Terminal</span>
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">
                915
              </button>
            </div>
          </div>
        </div>
      </header>

      <MarketIndices />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Actions */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">F&O P&L Report</h1>
            <p className="text-sm text-gray-600">{statementPeriod}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FiPrinter className="h-5 w-5" />
              <span>Print</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FiDownload className="h-5 w-5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Client Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Client Name</p>
              <p className="text-base font-semibold text-gray-900">{clientName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Unique Client Code</p>
              <p className="text-base font-semibold text-gray-900">{clientCode}</p>
            </div>
          </div>
        </div>

        {/* Realised P&L Summary */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Realised P&L</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">Futures</span>
              <span className={`text-sm font-semibold ${realisedPnL.futures >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(realisedPnL.futures)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">Options</span>
              <span className={`text-sm font-semibold ${realisedPnL.options >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(realisedPnL.options)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 pt-3 border-t-2 border-gray-300">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className={`text-base font-bold ${realisedPnL.total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(realisedPnL.total)}
              </span>
            </div>
          </div>
        </div>

        {/* Charges Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Charges</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">Exchange Transaction Charges</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.exchangeTransactionCharges)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">SEBI Turnover Charges</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.sebiTurnoverCharges)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">STT (Securities Transaction Tax)</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.stt)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">Stamp Duty</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.stampDuty)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">IPFT Charges</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.ipftCharges)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">Brokerage</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.brokerage)}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-700">Total GST</span>
              <span className="text-sm font-semibold text-gray-900">{formatCurrency(charges.totalGST)}</span>
            </div>
            <div className="flex items-center justify-between py-2 pt-3 border-t-2 border-gray-300">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className="text-base font-bold text-gray-900">{formatCurrency(charges.total)}</span>
            </div>
          </div>
        </div>

        {/* Realised Trades Section */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Realised trades (trade level)</h2>
          </div>

          {/* Futures Trades */}
          <div className="px-6 py-4">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Futures</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Scrip Name</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Quantity</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Buy Date</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Buy Price</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Buy Value</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Sell Date</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Sell Price</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Sell Value</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Realized P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {futuresTrades.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="py-8 text-center text-sm text-gray-500">
                        No trades found
                      </td>
                    </tr>
                  ) : (
                    futuresTrades.map((trade, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{trade.scripName}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{trade.quantity}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{formatDate(trade.buyDate)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.buyPrice)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.buyValue)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{formatDate(trade.sellDate)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.sellPrice)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.sellValue)}</td>
                        <td className={`py-3 px-4 text-sm font-semibold text-right ${trade.realizedPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatCurrency(trade.realizedPnL)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Options Trades */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Options</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Scrip Name</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Quantity</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Buy Date</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Buy Price</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Buy Value</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Sell Date</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Sell Price</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Sell Value</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700 uppercase">Realized P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {optionsTrades.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="py-8 text-center text-sm text-gray-500">
                        No trades found
                      </td>
                    </tr>
                  ) : (
                    optionsTrades.map((trade, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{trade.scripName}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{trade.quantity}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{formatDate(trade.buyDate)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.buyPrice)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.buyValue)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{formatDate(trade.sellDate)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.sellPrice)}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 text-right">{formatCurrency(trade.sellValue)}</td>
                        <td className={`py-3 px-4 text-sm font-semibold text-right ${trade.realizedPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatCurrency(trade.realizedPnL)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FNOPnLReport;

