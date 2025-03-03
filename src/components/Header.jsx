import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Nexachain.ai</div>
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
