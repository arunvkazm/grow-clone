// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import StockDetail from './pages/StockDetail';
import MutualFunds from './pages/MutualFunds';
import MutualFundDetail from './pages/MutualFundDetail';
import Explore from './pages/Explore';
import Holdings from './pages/Holdings';
import Positions from './pages/Positions';
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
      <Routes>
        {/* Public routes - with Navbar/Footer */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/stocks" element={
          <>
            <Navbar />
            <Stocks />
            <Footer />
          </>
        } />
        <Route path="/stocks/:id" element={
          <>
            <Navbar />
            <StockDetail />
            <Footer />
          </>
        } />
        <Route path="/mutual-funds" element={
          <>
            <Navbar />
            <MutualFunds />
            <Footer />
          </>
        } />
        <Route path="/mutual-funds/:id" element={
          <>
            <Navbar />
            <MutualFundDetail />
            <Footer />
          </>
        } />
        <Route path="/news" element={
          <>
            <Navbar />
            <News />
            <Footer />
          </>
        } />
        <Route path="/ipos" element={
          <>
            <Navbar />
            <IPOs />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Dashboard routes - no Navbar/Footer (they have their own header) */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Navigate to="/explore" replace />
          </ProtectedRoute>
        } />
        <Route path="/explore" element={
          <ProtectedRoute>
            <Explore />
          </ProtectedRoute>
        } />
        <Route path="/holdings" element={
          <ProtectedRoute>
            <Holdings />
          </ProtectedRoute>
        } />
        <Route path="/positions" element={
          <ProtectedRoute>
            <Positions />
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />
        <Route path="/watchlist" element={
          <ProtectedRoute>
            <Watchlist />
          </ProtectedRoute>
        } />
      </Routes>
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
    </Router>
  );
}

export default App;
