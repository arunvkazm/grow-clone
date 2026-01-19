import React from 'react';

const CompanyLogo = ({ companyName, className = "w-10 h-10" }) => {
  // Map company names to their logo URLs or SVG
  const logoMap = {
    'CG Power & Inds': (
      <div className={`${className} rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center`}>
        <span className="text-white text-xs font-bold">CG</span>
      </div>
    ),
    'Interglobe Aviation': (
      <div className={`${className} rounded-lg bg-blue-600 flex items-center justify-center`}>
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
    ),
    'Hindustan Zinc': (
      <div className={`${className} rounded-lg bg-gray-900 flex items-center justify-center`}>
        <span className="text-white text-xs font-bold">HZ</span>
      </div>
    ),
    'Tech Mahindra': (
      <div className={`${className} rounded-lg bg-red-500 flex items-center justify-center`}>
        <span className="text-white text-xs font-bold">TM</span>
      </div>
    ),
    'Kotak Mahindra Bank': (
      <div className={`${className} rounded-lg bg-blue-500 flex items-center justify-center`}>
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </div>
    ),
    'Hindustan Unilever': (
      <div className={`${className} rounded-lg bg-blue-600 flex items-center justify-center`}>
        <span className="text-white text-xs font-bold">HU</span>
      </div>
    ),
    'Bharat Coking Coal': (
      <div className={`${className} rounded-lg bg-blue-100 flex items-center justify-center`}>
        <span className="text-blue-600 text-sm font-bold">B</span>
      </div>
    ),
    'Jindal SAW': (
      <div className={`${className} rounded-lg bg-blue-500 flex items-center justify-center`}>
        <span className="text-white text-sm font-bold">JS</span>
      </div>
    ),
    'Netweb Technologies': (
      <div className={`${className} rounded-lg bg-indigo-500 flex items-center justify-center`}>
        <span className="text-white text-sm font-bold">N</span>
      </div>
    ),
    'SILVERBEES': (
      <div className={`${className} rounded-lg bg-red-500 flex items-center justify-center`}>
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 7L12 12L20 7L12 2Z" />
          <path d="M4 17L12 22L20 17" />
          <path d="M4 12L12 17L20 12" />
        </svg>
      </div>
    ),
    'Interglobe Aviation': (
      <div className={`${className} rounded-lg bg-blue-600 flex items-center justify-center`}>
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
    ),
    'Axis Bank': (
      <div className={`${className} rounded-lg bg-indigo-100 flex items-center justify-center`}>
        <span className="text-indigo-600 text-sm font-bold">A</span>
      </div>
    ),
    'Indobell Insulations': (
      <div className={`${className} rounded-lg bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-600 text-sm font-bold">II</span>
      </div>
    ),
    'MRPL': (
      <div className={`${className} rounded-lg bg-red-100 flex items-center justify-center`}>
        <span className="text-red-600 text-sm font-bold">M</span>
      </div>
    ),
  };

  // Try to get logo from map, otherwise use fallback
  const logo = logoMap[companyName];
  
  if (logo) {
    return logo;
  }

  // Fallback: use first letter
  const initial = companyName.charAt(0).toUpperCase();
  return (
    <div className={`${className} rounded-lg bg-gray-100 flex items-center justify-center`}>
      <span className="text-gray-600 text-sm font-bold">{initial}</span>
    </div>
  );
};

export default CompanyLogo;

