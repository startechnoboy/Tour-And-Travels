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
import ProtectedRoute from "./components/ProtectedRoute";
import Tour from "./components/Tour";
import About from "./components/About";
import AuthHeader from "./components/AuthHeader";
import ViewDetails from "./components/ViewDetails";

import "./App.css";
import "./components/Form.css";
import "./components/Tours.css";
import Cart from "./components/Cart";
// import "./components/Header.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <AuthHeader />
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

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/tour" element={<Tour />} />
        <Route path="/ViewDetails" element={<ViewDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/support" element={<Support />} /> */}

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
