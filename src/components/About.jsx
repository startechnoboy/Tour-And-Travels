/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome to Travel With Code</h2>
          <p>
            At Travel With Code, we believe that travel is not just about visiting new places, but about creating unforgettable experiences. Our mission is to inspire and empower travelers to explore the world with confidence and curiosity.
          </p>
          
        </div>
        <div className="col-md-4">
          <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?size=626&ext=jpg&ga=GA1.1.1565719171.1715143403&semt=sph" alt="Travel" className="img-fluid rounded" />
        </div>
      </div>
      <div className="mt-4">
        <h2>Our Services</h2>
        <ul>
          <li>Customized Tour Packages</li>
          <li>Flight and Hotel Booking</li>
          <li>Travel Insurance</li>
          <li>Local Guides and Tours</li>
          <li>24/7 Customer Support</li>
        </ul>
      </div>
      <div className="mt-4">
        <h2>Why Choose Us?</h2>
        <p>
          Our team of experienced travel experts is dedicated to providing you with the best travel experience possible. Here are a few reasons why you should choose Travel With Code for your next adventure:
        </p>
        <ul>
          <li>Personalized Service: We tailor our services to meet your specific needs and preferences.</li>
          <li>Expert Advice: Our travel specialists have extensive knowledge and experience in the travel industry.</li>
          <li>Best Prices: We offer competitive prices and exclusive deals to help you save on your travels.</li>
          <li>Customer Satisfaction: We are committed to ensuring your satisfaction and making your trip memorable.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
