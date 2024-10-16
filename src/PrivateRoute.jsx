// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Eğer kullanıcı durumu yükleniyorsa, yükleniyor göstergesi veya boş bir sayfa döndür
  if (loading) {
    return <div>Loading...</div>; // Veya başka bir yükleniyor göstergesi
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;