/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import "./Default.css";
import "react-datepicker/dist/react-datepicker.css";


function Default() {
  const text =
    "The world is a book and those who do not travel read only one page -St. Augustine";
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
      <h1 className="texting">YOUR JOURNEY, YOUR STORY</h1>
      <div className="gallery">
        <img
          src="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Nature 1"
          className="gallery-item"
        />
        <img
          src="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Nature 2"
          className="gallery-item"
        />
        <img
          src="https://images.pexels.com/photos/3232609/pexels-photo-3232609.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Nature 3"
          className="gallery-item"
        />
      </div>
      <h3>{words}</h3>
      <Outlet />
      {/* <button className="btn">TRAVEL PLAN</button> */}
      <footer className="footer">
      <p>© 2024 Your Journey. All Rights Reserved.</p>
      <p>
        Follow us on:
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        ,
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        ,
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i> 
        </a>
      </p>
    </footer>
    </div>
  );
}

export default Default;
