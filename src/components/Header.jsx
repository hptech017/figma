import React from "react";
import "../styles/header.css";
import logo from "../assets/nexa-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Enterprise</a>
        <a href="#">Customers</a>
        <a href="#">About Us</a>
      </nav>

      <button className="all-products">All Product ☰</button>
    </header>
  );
};

export default Header;
