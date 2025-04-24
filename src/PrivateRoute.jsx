import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return isLoggedIn ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
