import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to TRTR Inc.</h1>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="intro">
          <h2>Your Trusted Business Partner</h2>
          <p>Explore our services and solutions to help grow your business.</p>
        </section>
        <div className="cta-buttons">
          <Link to="/services" className="btn-primary">Explore Services</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
