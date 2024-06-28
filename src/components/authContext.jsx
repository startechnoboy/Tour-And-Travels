/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    email: '',
  });

  const login = (email) => {
    setAuth({
      isLoggedIn: true,
      email,
    });
  };

  const logout = () => {
    setAuth({
      isLoggedIn: false,
      email: '',
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
