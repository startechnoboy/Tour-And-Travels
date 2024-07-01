/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Support from "./components/Support";
import Default from "./layouts/Default";
import ProtectedRoute from "./components/Protected"; // Import the ProtectedRoute component

import "./App.css";
import "./components/Header.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/support"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Support />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </>
  );
};

export default App;
