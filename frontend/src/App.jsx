import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Home from "./pages/home";

const getTokenFromCookie = () => {
  const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
  return match ? match[2] : null;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getTokenFromCookie();
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Routes>
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/" /> : <Signup setAuth={setIsAuthenticated} />}
      />
      <Route
        path="/signin"
        element={isAuthenticated ? <Navigate to="/" /> : <SignIn setAuth={setIsAuthenticated} />}
      />
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
}

export default App;
