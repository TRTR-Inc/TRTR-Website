import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Home = () => {
  return (
    <>
      <nav>
        <div className="logo">TRTR Inc.</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to TRTR</h1>
        <p>Your one-stop solution for business automation.</p>
        <button className="cta-button">Explore Now</button>
      </header>

      <section className="section">
        <h2>Innovative Solutions</h2>
        <p>We bring cutting-edge technology to streamline your business operations, making everything efficient and seamless.</p>
      </section>

      <section className="section">
        <h2>Explore Our Products</h2>
        <p>Discover our latest offerings that are transforming industries worldwide.</p>
      </section>
    </>
  );
};

export default Home;
