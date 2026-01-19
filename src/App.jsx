// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import StockDetail from './pages/StockDetail';
import MutualFunds from './pages/MutualFunds';
import MutualFundDetail from './pages/MutualFundDetail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Watchlist from './pages/Watchlist';
import Orders from './pages/Orders';
import News from './pages/News';
import IPOs from './pages/IPOs';
import ProtectedRoute from './components/common/ProtectedRoute';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/stocks/:id" element={<StockDetail />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/mutual-funds/:id" element={<MutualFundDetail />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/orders" element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />
            <Route path="/news" element={<News />} />
            <Route path="/ipos" element={<IPOs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;