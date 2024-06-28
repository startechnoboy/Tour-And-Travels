/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import "./Default.css"; // Make sure to import the CSS file for styling
// import storageHandler from "../Helper/storageHandler";

function Default() {
  const text =
    "This is the default page. Please navigate using the menu above to explore more.";
  const words = text.split(" ").map((word, index) => (
    <span
      key={index}
      className="word"
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {word}&nbsp;
    </span>
  ));

  return (
    <div className="default-container">
      <h2>{words}</h2>
      <h1>Welcome to Our Website</h1>
      <Outlet />
    </div>
  );
}

export default Default;
