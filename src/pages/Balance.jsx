import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown, FiArrowRight, FiX, FiClock } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';
import ProfileDropdown from '../components/dashboard/ProfileDropdown';
import GrowwLogo from '../components/common/GrowwLogo';
import Footer from '../components/layout/Footer';
import toast from 'react-hot-toast';

const Balance = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('add'); // 'add' or 'withdraw'
  const [amount, setAmount] = useState('100');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [balance, setBalance] = useState(1280000000); // ₹128 Cr
  const [cashBalance, setCashBalance] = useState(0.00);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);
  const isActive = location.pathname === '/balance';

  // Calculate total pending withdrawal amount
  const totalPendingAmount = pendingWithdrawals.reduce((sum, withdrawal) => sum + withdrawal.amount, 0);
  // Withdrawable balance is cash balance (money is not deducted until processed after 15 days)
  const withdrawableBalance = cashBalance;

  const formatLargeCurrency = (amount) => {
    // Format in Indian number system (15,00,00,000 format)
    return `${amount.toLocaleString('en-IN')} Cr`;
  };

  const quickAddAmounts = [1000, 5000, 10000];

  const handleQuickAdd = (value) => {
    const currentAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const newAmount = currentAmount + value;
    setAmount(newAmount.toLocaleString('en-IN'));
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;
    // Remove ₹ symbol and commas
    value = value.replace(/[₹,]/g, '');
    // Keep only numbers
    value = value.replace(/[^0-9]/g, '');
    
    if (value) {
      const numValue = parseFloat(value);
      if (numValue > 0) {
        setAmount(numValue.toLocaleString('en-IN'));
      } else {
        setAmount('');
      }
    } else {
      setAmount('');
    }
  };

  const handleWithdrawAmountChange = (e) => {
    let value = e.target.value;
    // Remove ₹ symbol and commas
    value = value.replace(/[₹,]/g, '');
    // Keep only numbers
    value = value.replace(/[^0-9]/g, '');
    
    if (value) {
      const numValue = parseFloat(value);
      if (numValue > 0 && numValue <= withdrawableBalance) {
        setWithdrawAmount(numValue.toLocaleString('en-IN'));
      } else if (numValue > withdrawableBalance) {
        setWithdrawAmount(withdrawableBalance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        toast.error('Cannot withdraw more than available balance');
      } else {
        setWithdrawAmount('');
      }
    } else {
      setWithdrawAmount('');
    }
  };

  const handleAddMoney = async () => {
    const amountValue = parseFloat(amount.replace(/,/g, '')) || 0;
    
    if (amountValue <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (amountValue < 100) {
      toast.error('Minimum amount to add is ₹100');
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const newCashBalance = cashBalance + amountValue;
      const newBalance = balance + amountValue;
      
      setCashBalance(newCashBalance);
      setBalance(newBalance);
      setAmount('100');
      
      toast.success(`₹${amountValue.toLocaleString('en-IN')} added successfully!`);
      setIsProcessing(false);
    }, 1500);
  };

  const handleWithdraw = async () => {
    const withdrawValue = parseFloat(withdrawAmount.replace(/,/g, '')) || 0;
    
    if (withdrawValue <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    // Check if total pending + new withdrawal exceeds available balance
    if (withdrawValue + totalPendingAmount > cashBalance) {
      toast.error('Insufficient balance. You have pending withdrawals.');
      return;
    }

    if (withdrawValue < 100) {
      toast.error('Minimum withdrawal amount is ₹100');
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      // Create pending withdrawal (money is NOT deducted immediately)
      const newPendingWithdrawal = {
        id: Date.now(),
        amount: withdrawValue,
        status: 'pending',
        initiatedDate: new Date().toISOString(),
        expectedDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days from now
        bankAccount: 'STATE BANK OF INDIA ....1640'
      };
      
      setPendingWithdrawals([...pendingWithdrawals, newPendingWithdrawal]);
      setWithdrawAmount('');
      
      toast.success(`₹${withdrawValue.toLocaleString('en-IN')} withdrawal request submitted! Your money is now pending and will be processed in 15 days.`);
      setIsProcessing(false);
    }, 1500);
  };

  const handleCashAdd = () => {
    setActiveTab('add');
    toast.info('Use the Add money tab to add cash');
  };

  const handlePledgeAdd = () => {
    toast.info('Pledge feature coming soon!');
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
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <ProfileDropdown />
            </div>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Balance Card */}
          <div className="space-y-4">
            {/* Stocks, F&O balance Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-sm font-medium text-gray-700 mb-4">Stocks, F&O balance</h2>
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-600">₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              
              <div className="space-y-0">
                {/* Cash Section */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Cash</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-gray-600">₹{cashBalance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    <button 
                      onClick={handleCashAdd}
                      className="px-4 py-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Pledge Section */}
                <div className="py-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Pledge</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Add balance for stocks intraday and F&O by pledging your holdings on Groww.
                      </p>
                    </div>
                    <button 
                      onClick={handlePledgeAdd}
                      className="px-4 py-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Transactions Card */}
            <Link to="/fno-pnl-report" className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors block">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">All transactions</span>
                <FiArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
          </div>

          {/* Right Panel - Add/Withdraw Money */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('add')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'add'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Add money
              </button>
              <button
                onClick={() => setActiveTab('withdraw')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'withdraw'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Withdraw
              </button>
            </div>

            {activeTab === 'add' ? (
              <div className="space-y-6">
                {/* Amount Display */}
                <div>
                  <p className="text-4xl font-bold text-gray-900 mb-6">
                    ₹{amount || '100'}
                  </p>
                  
                  {/* Quick Add Buttons */}
                  <div className="flex space-x-3 mb-6">
                    {quickAddAmounts.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleQuickAdd(value)}
                        className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        +₹{value.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QR Code Payment Section */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Scan QR to pay</p>
                    </div>
                  </div>
                </div>

                {/* Bank Account Section */}
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">SBI</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">STATE BANK OF INDIA</p>
                        <p className="text-xs text-gray-500">....1640</p>
                      </div>
                    </div>
                    <FiArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Add Money Button */}
                <button 
                  onClick={handleAddMoney}
                  disabled={isProcessing || !amount || parseFloat(amount.replace(/,/g, '')) <= 0}
                  className={`w-full py-3 text-sm font-medium rounded-lg transition-colors ${
                    isProcessing || !amount || parseFloat(amount.replace(/,/g, '')) <= 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Add money'}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Withdrawable Balance */}
                <div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-2">Available to withdraw</p>
                    <p className="text-4xl font-bold text-gray-900 mb-6">
                      ₹{withdrawableBalance.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  
                  {/* No Balance Message */}
                  {withdrawableBalance === 0 && (
                    <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-600">No balance available to withdraw</p>
                    </div>
                  )}

                  {/* Withdraw Amount Input */}
                  {withdrawableBalance > 0 && (
                    <div className="mb-6">
                      <label className="block text-sm text-gray-600 mb-2">Enter amount to withdraw</label>
                      <div className="relative">
                        <span className="absolute left-0 text-2xl font-bold text-gray-900 pointer-events-none pl-4 pt-3">₹</span>
                        <input
                          type="text"
                          value={withdrawAmount || ''}
                          onChange={handleWithdrawAmountChange}
                          onFocus={(e) => {
                            e.target.select();
                          }}
                          placeholder="0"
                          className="w-full text-2xl font-bold text-gray-900 border border-gray-300 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          inputMode="numeric"
                        />
                      </div>
                      
                      {/* Quick Withdraw Buttons */}
                      <div className="flex space-x-3 mt-4">
                        {[1000, 5000, 10000].map((value) => {
                          if (value > withdrawableBalance) return null;
                          return (
                            <button
                              key={value}
                              onClick={() => {
                                const newAmount = Math.min(value, withdrawableBalance);
                                setWithdrawAmount(newAmount.toLocaleString('en-IN'));
                              }}
                              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ₹{value.toLocaleString('en-IN')}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Pending Withdrawals Info */}
                  {pendingWithdrawals.length > 0 && withdrawableBalance > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                      <div className="flex items-start space-x-2">
                        <FiClock className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-yellow-800 mb-1">
                            You have {pendingWithdrawals.length} pending withdrawal{pendingWithdrawals.length > 1 ? 's' : ''}
                          </p>
                          <p className="text-xs text-yellow-700">
                            ₹{totalPendingAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} is pending. Your money will be processed in 15 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bank Account Section */}
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">SBI</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">STATE BANK OF INDIA</p>
                        <p className="text-xs text-gray-500">....1640</p>
                      </div>
                    </div>
                    <FiArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Withdraw Button */}
                <button
                  onClick={handleWithdraw}
                  disabled={withdrawableBalance === 0 || isProcessing || !withdrawAmount || parseFloat(withdrawAmount.replace(/,/g, '')) <= 0}
                  className={`w-full py-3 text-sm font-medium rounded-lg transition-colors ${
                    withdrawableBalance === 0 || isProcessing || !withdrawAmount || parseFloat(withdrawAmount.replace(/,/g, '')) <= 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Withdraw'}
                </button>

                {/* Pending Withdrawals Section */}
                {pendingWithdrawals.length > 0 && (
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Your Pending Withdrawals</h3>
                    <div className="space-y-3">
                      {pendingWithdrawals.map((withdrawal) => {
                        const expectedDate = new Date(withdrawal.expectedDate);
                        const daysRemaining = Math.ceil((expectedDate - new Date()) / (1000 * 60 * 60 * 24));
                        
                        return (
                          <div key={withdrawal.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <FiClock className="h-4 w-4 text-yellow-600" />
                                <span className="text-xs font-semibold text-yellow-800 uppercase">Pending</span>
                              </div>
                              <span className="text-sm font-bold text-gray-900">
                                ₹{withdrawal.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 mb-1">
                              Requested on: {new Date(withdrawal.initiatedDate).toLocaleDateString('en-IN', { 
                                day: '2-digit', 
                                month: 'short', 
                                year: 'numeric' 
                              })}
                            </p>
                            <p className="text-xs font-medium text-yellow-800 mb-1">
                              Your money is currently pending. It will be processed in {daysRemaining} days (Total: 15 days)
                            </p>
                            <p className="text-xs text-gray-500">
                              To: {withdrawal.bankAccount}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Balance;

