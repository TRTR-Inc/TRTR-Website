import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react';

const Home = () => <div><h1>Welcome to TRTR</h1></div>;
const Products = () => <div><h1>Products</h1></div>;
const Services = () => <div><h1>Services</h1></div>;
const About = () => <div><h1>About Us</h1></div>;
const Contact = () => <div><h1>Contact Us</h1></div>;
const Careers = () => <div><h1>Careers</h1></div>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Products</Link> | 
        <Link to="/services">Services</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/careers">Careers</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

export default withAuthenticator(App);
