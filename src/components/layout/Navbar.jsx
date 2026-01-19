// src/components/layout/Navbar.jsx - Groww Style
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';
import GrowwLogo from '../common/GrowwLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const moreMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setShowMoreMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for "${searchQuery}"`);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <GrowwLogo size="md" />

          {/* Desktop Navigation - Groww Style */}
          <div className="hidden md:flex items-center space-x-6 flex-1 max-w-2xl mx-6">
            <Link to="/explore" className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
              Stocks
            </Link>
            <Link to="/futures-and-options" className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
              F&O
            </Link>
            <Link to="/mutual-funds" className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
              Mutual Funds
            </Link>
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                More
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${showMoreMenu ? 'rotate-180' : ''}`} />
              </button>
              {showMoreMenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/ipos" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setShowMoreMenu(false)}>IPOs</Link>
                  <Link to="/news" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setShowMoreMenu(false)}>News</Link>
                  <Link to="/watchlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setShowMoreMenu(false)}>Watchlist</Link>
                </div>
              )}
            </div>

            {/* Search Bar - Groww Style */}
            <form onSubmit={handleSearch} className="relative flex-1 max-w-md ml-4">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search Groww..."
                className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">Ctrl+K</span>
            </form>
          </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                <span className="text-gray-700 hidden sm:block">Hi, {user.name}</span>
                  <button
                    onClick={handleLogout}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                  <Link
                    to="/login"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                Login/Sign up
                  </Link>
              )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/explore" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                Stocks
              </Link>
              <Link to="/futures-and-options" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                F&O
              </Link>
              <Link to="/mutual-funds" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                Mutual Funds
              </Link>
              <Link to="/ipos" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                IPOs
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-primary-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                News
                </Link>
              
              <form onSubmit={handleSearch} className="px-3">
                <input
                  type="text"
                  placeholder="Search Groww..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              <div className="px-3">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg"
                  >
                    Logout
                  </button>
                ) : (
                    <Link
                      to="/login"
                      className="block w-full text-center px-4 py-2 bg-primary-500 text-white rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                    Login/Sign up
                    </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;