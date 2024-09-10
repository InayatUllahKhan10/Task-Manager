import React, { useState, useContext, createContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook for consuming the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component that will wrap around the app and provide auth state
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || '');
  
    const value = {
      isAuthenticated,
      setIsAuthenticated,
      userRole,
      setUserRole,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };