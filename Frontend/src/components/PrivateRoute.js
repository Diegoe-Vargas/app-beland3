import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

// PrivateRoute simplemente revisa si hay usuario, y si no, redirige.
function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Si no hay usuario, redirigimos al login
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario, mostramos el contenido
  return children;
}

export default PrivateRoute;

