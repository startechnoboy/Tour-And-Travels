/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { useLocation } from 'react-router-dom';
import './Home.css'; // Make sure to import the CSS file for styling
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate= useNavigate();

  const handleSubmit = ()=>{
    navigate('/tour')
  }

  return (
    <div className="Home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Your Adventure</h1>
          <p>Discover your next great adventure, become an explorer to get started!</p>
          <button className="cta-button" onClick={handleSubmit}>Explore Now</button>
        </div>
      </div>

      {/* Introduction */} 
      <section className="introduction">
        <h2>About Us</h2>
        <p>
          We provide the best travel experiences with tailored itineraries, guided tours, and exceptional service.
          Whether you're seeking adventure, relaxation, or cultural immersion, we have something for everyone.
        </p>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/1527504/pexels-photo-1527504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Destination 1" />
            <h3>Destination 1</h3>
            <p>Experience the beauty and culture of Destination 1.</p>
          </div>
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/1480799/pexels-photo-1480799.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Destination 2" />
            <h3>Destination 2</h3>
            <p>Explore the stunning landscapes and rich history of Destination 2.</p>
          </div>
          <div className="destination-card">
            <img src="https://images.pexels.com/photos/2872210/pexels-photo-2872210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Destination 3" />
            <h3>Destination 3</h3>
            <p>Discover the adventure and excitement in Destination 3.</p>
          </div>
        </div>
      </section>
    </div>


  );
}

export default Home;
