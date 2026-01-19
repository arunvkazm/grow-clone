// src/hooks/useAuth.jsx
import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('groww_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Dummy login - in real app, this would be an API call
    const dummyUser = {
      id: 1,
      name: 'John Doe',
      email: email,
      portfolioValue: 1250000,
      joinedDate: '2023-01-15'
    };
    
    setUser(dummyUser);
    localStorage.setItem('groww_user', JSON.stringify(dummyUser));
    return { success: true, user: dummyUser };
  };

  const signup = (userData) => {
    // Dummy signup
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      portfolioValue: 0,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    
    setUser(newUser);
    localStorage.setItem('groww_user', JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('groww_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};