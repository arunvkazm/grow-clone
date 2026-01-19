// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = {
    'Investments': [
      { name: 'Stocks', path: '/stocks' },
      { name: 'Mutual Funds', path: '/mutual-funds' },
      { name: 'ETFs', path: '#' },
      { name: 'US Stocks', path: '#' },
    ],
    'Learn': [
      { name: 'Articles', path: '#' },
      { name: 'Videos', path: '#' },
      { name: 'Courses', path: '#' },
      { name: 'Glossary', path: '#' },
    ],
    'Company': [
      { name: 'About Us', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'Contact Us', path: '#' },
      { name: 'FAQs', path: '#' },
    ],
    'Legal': [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms & Conditions', path: '#' },
      { name: 'Disclosures', path: '#' },
      { name: 'Grievance Redressal', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary-400">Market</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              India's fastest growing investment platform. Invest in stocks, mutual funds, and more with ₹0 brokerage.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Market. All rights reserved.
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>Registered Office: 123, Financial Street, Mumbai - 400001</p>
            <p className="mt-1">CIN: U67190MH2023PTC123456</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-400 text-sm text-center">
            Disclaimer: Investing in the securities market involves risk. Please read all documents carefully before investing.
            Past performance is not indicative of future returns. This is a demo application for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;