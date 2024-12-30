import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Navigate to="/login" replace />;
  }

  const { role } = authContext;

  return role === 'admin' ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminRoute;
