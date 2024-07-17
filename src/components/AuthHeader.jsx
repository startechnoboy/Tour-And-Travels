/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const AuthHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { email } = location.state || {};
    if (email) {
      setIsLoggedIn(true);
      setEmail(email);
    }
  }, [location.state]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <Header isLoggedIn={isLoggedIn} email={email} onLogout={handleLogout} />
  );
};

export default AuthHeader;
