// src/components/layout/Footer.jsx - Exact Groww Style
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';
import GrowwLogo from '../common/GrowwLogo';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Share Market');
  const [showMore, setShowMore] = useState(false);

  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'X (Twitter)' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
  ];

  const marketTabs = [
    'Share Market',
    'Indices',
    'F&O',
    'Mutual Funds',
    'ETFs',
    'Funds By Groww',
    'Calculators',
    'IPO',
    'Miscellaneous'
  ];

  const marketData = {
    'Share Market': [
      'Top Gainers Stocks',
      '52 Weeks High Stocks',
      'Tata Motors',
      'NHPC',
      'ITC',
      'Wipro'
    ],
    'Indices': [
      'Top Losers Stocks',
      '52 Weeks Low Stocks',
      'IREDA',
      'State Bank of India',
      'Adani Power',
      'CDSL'
    ],
    'F&O': [
      'Most Traded Stocks',
      'Stocks Market Calendar',
      'Tata Steel',
      'Tata Power',
      'Bharat Heavy Electricals',
      'Indian Oil Corporation'
    ],
    'Mutual Funds': [],
    'ETFs': [],
    'Funds By Groww': [
      'Stocks Feed',
      'Suzlon Energy',
      'Zomato (Eternal)',
      'Yes Bank',
      'Infosys',
      'NBCC'
    ],
    'Calculators': [],
    'IPO': [],
    'Miscellaneous': [
      'FII DII Activity',
      'IRFC',
      'Bharat Electronics',
      'HDFC Bank',
      'Vedanta',
      'Reliance Power'
    ]
  };

  const growwLinks = [
    'About Us',
    'Pricing',
    'Blog',
    'Media & Press',
    'Careers',
    'Help & Support',
    'Trust & Safety',
    'Investor Relations'
  ];

  const productLinks = [
    'Stocks',
    'F&O',
    'MTF',
    'ETF',
    'IPO',
    'Mutual Funds',
    'Commodities',
    'Groww Terminal',
    '915 Terminal',
    'Stock Screens',
    'Algo Trading',
    'Groww Digest',
    'Demat Account',
    'Groww AMC'
  ];

  const othersLinks = [
    'NSE',
    'BSE',
    'MCX',
    'Terms and Conditions',
    'Policies and Procedures',
    'Regulatory & Other Info',
    'Privacy Policy',
    'Disclosure',
    'SMART ODR',
    'Download Forms',
    'Information Security Practices',
    'Investor Charter and Grievance',
    'Bug Bounty'
  ];

  return (
    <footer className="text-gray-900 mt-auto" style={{ backgroundColor: 'oklch(98.5% 0.002 247.839)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section - Logo, Address, Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Logo and Address */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <GrowwLogo size="md" />
            </div>
            <div className="text-gray-600 text-sm mb-6">
              <p>Vaishnavi Tech Park, South Tower, 3rd Floor</p>
              <p>Sarjapur Main Road, Bellandur, Bengaluru - 560103</p>
              <p>Karnataka</p>
            </div>
            
            {/* Contact Us */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">Contact Us</p>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download the App */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">Download the App</p>
              <div className="flex space-x-3">
                <a href="#" className="text-sm text-primary-500 hover:text-primary-600">App Store</a>
                <a href="#" className="text-sm text-primary-500 hover:text-primary-600">Google Play</a>
              </div>
            </div>

            {/* Copyright and Version */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>©2016-2026 Groww. All rights reserved.</span>
              <span>Version: 7.1.9</span>
            </div>
          </div>

          {/* Right Section - GROWW and PRODUCTS */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GROWW Column */}
            <div>
              <h3 className="font-bold text-sm mb-4 text-gray-900">GROWW</h3>
              <ul className="space-y-2 text-sm">
                {growwLinks.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCTS Column */}
            <div>
              <h3 className="font-bold text-sm mb-4 text-gray-900">PRODUCTS</h3>
              <ul className="space-y-2 text-sm">
                {productLinks.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Market Data & Funds Section */}
        <div className="mb-8 rounded-lg p-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-4 border-b border-gray-200 pb-2">
            {marketTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium pb-2 transition-colors ${
                  activeTab === tab
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {marketData[activeTab]?.slice(0, showMore ? marketData[activeTab].length : 6).map((item, index) => (
              <Link
                key={index}
                to="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Show More Button */}
          {marketData[activeTab]?.length > 6 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-sm text-primary-500 hover:text-primary-600 flex items-center space-x-1"
            >
              <span>Show More</span>
              <svg className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Bottom Section - Others */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
            <span className="font-semibold">Others:</span>
            {othersLinks.map((link, index) => (
              <React.Fragment key={link}>
                <Link to="#" className="hover:text-gray-900 transition-colors">
                  {link}
                </Link>
                {index < othersLinks.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
