import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUserApi, registerUserApi, getMeApi } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('fitness_gym_token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const res = await getMeApi();
          if (res.success) {
            setUser(res.data);
          } else {
            logout();
          }
        } catch (err) {
          logout();
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [token]);

  const login = async (credentials) => {
    const res = await loginUserApi(credentials);
    if (res.success && res.data.token) {
      localStorage.setItem('fitness_gym_token', res.data.token);
      setToken(res.data.token);
      setUser(res.data);
    }
    return res;
  };

  const register = async (userData) => {
    const res = await registerUserApi(userData);
    if (res.success && res.data.token) {
      localStorage.setItem('fitness_gym_token', res.data.token);
      setToken(res.data.token);
      setUser(res.data);
    }
    return res;
  };

  const logout = () => {
    localStorage.removeItem('fitness_gym_token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!token && !!user,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
