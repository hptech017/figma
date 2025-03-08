import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/nexa-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMobileMenuOpen ? "mobile-nav" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Enterprise</a>
        <a href="#">Customers</a>
        <a href="#">About Us</a>
      </nav>

      <button className="all-products">All Product ☰</button>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
