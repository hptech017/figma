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

      {/* All Products Button with Hamburger Inside */}
      <button className="all-products" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        All Products
        <span className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </span>
      </button>
    </header>
  );
};

export default Header;
