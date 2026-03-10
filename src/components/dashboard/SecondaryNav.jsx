import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SecondaryNav = () => {
  const location = useLocation();
  const path = location.pathname;

  const linkClass = (href) =>
    `text-sm font-medium flex-shrink-0 whitespace-nowrap ${
      path === href ? 'text-gray-900 border-b-2 border-gray-900 pb-3' : 'text-gray-700 hover:text-gray-900'
    }`;

  return (
    <div className="min-h-12 py-2 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 border-t border-gray-100 overflow-hidden">
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide flex-1 min-w-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <Link to="/explore" className={linkClass('/explore')}>Explore</Link>
        <Link to="/holdings" className={linkClass('/holdings')}>Holdings</Link>
        <Link to="/positions" className={linkClass('/positions')}>Positions</Link>
        <Link to="/orders" className={linkClass('/orders')}>Orders</Link>
        <Link to="/watchlist" className={linkClass('/watchlist')}>Watchlist</Link>
      </div>
      <div className="flex items-center justify-end sm:justify-start space-x-2 sm:space-x-3 flex-shrink-0 px-4 sm:px-0 sm:ml-2">
        <button className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg whitespace-nowrap">
          <span>0</span>
          <span>Terminal</span>
        </button>
        <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">
          915
        </button>
      </div>
    </div>
  );
};

export default SecondaryNav;
