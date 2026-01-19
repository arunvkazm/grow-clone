// src/pages/Home.jsx - Exact Groww-style Landing Page
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiTrendingUp, FiZap, FiShield, FiBarChart2 } from 'react-icons/fi';
import HeroAnimation from '../components/home/HeroAnimation';

const Home = () => {

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Exact Groww Style */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Groww your wealth
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
                Built for a Growwing India
              </h2>
              <Link
                to="/login"
                className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge - Exact Groww Style */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroAnimation />
        </div>
      </section>

      {/* Features Section - Exact Groww Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Indian markets at your fingertips.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Long-term or short-term, high risk or low risk. Be the kind of investor you want to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/stocks" className="group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <FiBarChart2 className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stocks & Intraday</h3>
              <p className="text-gray-600 text-sm">Invest in stocks with zero commission</p>
            </Link>

            <Link to="/mutual-funds" className="group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <FiTrendingUp className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mutual funds & SIPs</h3>
              <p className="text-gray-600 text-sm">Start SIP with as low as ₹100</p>
            </Link>

            <Link to="/futures-and-options" className="group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <FiZap className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Futures & Options</h3>
              <p className="text-gray-600 text-sm">Trade in F&O with advanced tools</p>
            </Link>

            <Link to="/commodities" className="group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <FiShield className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Commodities</h3>
              <p className="text-gray-600 text-sm">Trade in Gold, Silver, and more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Finance Simplified Section - Groww Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Finance simplified, in your language.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">News</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  More than half of Nifty 50 stocks ended in the green.
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  7 Nifty sectors ended in the green with bank and financial services stocks gaining the most. Realty, metal, pharma and media stocks ended in the red.
                </p>
                <p className="text-sm text-gray-600">
                  The US markets ended higher on Feb 2 (Thursday). Most Asian markets were down.
                </p>
              </div>
              <Link to="/news" className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center">
                View News
                <FiChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Video</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Learn investing with Groww
                </h3>
                <p className="text-sm text-gray-600">
                  Watch educational videos to understand stocks, mutual funds, and more.
                </p>
              </div>
              <Link to="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center">
                Watch Videos
                <FiChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Word of the day</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Additional Surveillance Measure
                </h3>
                <p className="text-sm text-gray-600">
                  The Additional Surveillance Measure (ASM) framework was introduced to protect investors.
                </p>
              </div>
              <Link to="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center">
                View Digest
                <FiChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
