// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useAuth() || {}; // Ensure useAuth() does not return null

  // Check if the currentUser exists before rendering children
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
