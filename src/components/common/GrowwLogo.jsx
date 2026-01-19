import React from 'react';
import { Link } from 'react-router-dom';

const GrowwLogo = ({ size = 'md', showText = true, className = '', showStocks = false }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const logoContent = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src="/groww-logo.png" 
        alt="Groww Logo"
        className={`${sizeClasses[size]} object-contain flex-shrink-0`}
        onError={(e) => {
          // Fallback to gradient icon if image fails to load
          e.target.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.className = `${sizeClasses[size]} bg-gradient-to-br from-blue-500 via-green-500 to-purple-500 rounded-full flex items-center justify-center`;
          fallback.innerHTML = '<span class="text-white font-bold text-xs">G</span>';
          e.target.parentElement.insertBefore(fallback, e.target);
        }}
      />
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-gray-900`}>
          {showStocks ? 'Stocks' : 'Groww'}
        </span>
      )}
    </div>
  );

  return showText ? (
    <Link to="/" className="inline-block">
      {logoContent}
    </Link>
  ) : (
    logoContent
  );
};

export default GrowwLogo;

