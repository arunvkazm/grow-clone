// src/pages/News.jsx
import React, { useState } from 'react';
import { FiCalendar, FiClock, FiTrendingUp, FiTag } from 'react-icons/fi';
import { marketNews } from '../data/news';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNews, setSelectedNews] = useState(null);

  const categories = ['all', ...new Set(marketNews.map(news => news.category))];

  const filteredNews = selectedCategory === 'all'
    ? marketNews
    : marketNews.filter(news => news.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Market News & Insights</h1>
          <p className="text-gray-600">Stay updated with the latest market news and trends</p>
        </div>

        {/* Category Filters */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* News List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelectedNews(news)}
                className="bg-white rounded-xl shadow-card overflow-hidden cursor-pointer hover:shadow-card-hover transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">{news.source}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{news.summary}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FiCalendar className="h-4 w-4" />
                        <span>{formatDate(news.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiClock className="h-4 w-4" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {news.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          <FiTag className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* News Detail Sidebar */}
          <div className="lg:col-span-1">
            {selectedNews ? (
              <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    {selectedNews.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedNews.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <FiCalendar className="h-4 w-4" />
                    <span>{formatDate(selectedNews.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock className="h-4 w-4" />
                    <span>{selectedNews.time}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{selectedNews.content}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500 mb-2">Source: {selectedNews.source}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedNews.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        <FiTag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="text-center py-8">
                  <FiTrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Select a news article to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

