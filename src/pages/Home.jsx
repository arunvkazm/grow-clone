// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MarketOverview from '../components/home/MarketOverview';
import TopGainers from '../components/home/TopGainers';
import PopularFunds from '../components/home/PopularFunds';
import HeroSection from '../components/home/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Market Overview */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Market Overview</h2>
            <Link 
              to="/stocks" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all →
            </Link>
          </div>
          <MarketOverview />
        </section>

        {/* Top Gainers */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Top Gaining Stocks</h2>
            <Link 
              to="/stocks" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all →
            </Link>
          </div>
          <TopGainers />
        </section>

        {/* Popular Mutual Funds */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Mutual Funds</h2>
            <Link 
              to="/mutual-funds" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all →
            </Link>
          </div>
          <PopularFunds />
        </section>
      </div>
    </div>
  );
};

export default Home;