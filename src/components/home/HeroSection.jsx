// src/components/home/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiShield, FiDollarSign } from 'react-icons/fi';

const HeroSection = () => {
  const features = [
    {
      icon: FiTrendingUp,
      title: 'Zero Commission',
      description: 'Invest with zero brokerage fee on stocks & ETFs'
    },
    {
      icon: FiShield,
      title: 'Safe & Secure',
      description: 'Your investments are protected with bank-level security'
    },
    {
      icon: FiDollarSign,
      title: 'Low Investment',
      description: 'Start investing with as low as ₹100'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center lg:text-left lg:flex items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Invest in <span className="text-primary-600">Stocks</span>,{' '}
              <span className="text-primary-600">Mutual Funds</span>, & more
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join millions of Indians who trust Market with their investment journey.
              Start investing with expert recommendations and zero commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/signup"
                className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-lg font-semibold text-center"
              >
                Start Investing Free
              </Link>
              <Link
                to="/stocks"
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors text-lg font-semibold text-center"
              >
                Explore Stocks
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-card p-8 max-w-md mx-auto lg:ml-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Market?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;