import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (!user) {
    return <Navigate to={"/signin"} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
