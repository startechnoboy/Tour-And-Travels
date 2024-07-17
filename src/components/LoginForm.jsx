/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Store/AuthSlice";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Both fields are required...");
    } else {
      console.log("Logged in");
      onLogin(); // Call onLogin to update the login state
      dispatch(login({ email, password }));
      navigate("/home", { state: { email } });
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
