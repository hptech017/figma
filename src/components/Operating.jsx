import React from "react";
import "../styles/Operating.css";
import nexa from "../assets/nexa-chain-img.png"
import overlay from "../assets/overlay.png"

const Operating = () => {
  return (
    <div className="operating-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={nexa} alt="Nexachain AI" className="logo" />
        <h1 className="main-title">The Operating System For Business</h1>
        <p className="description">
          Run your entire business on Nexachain.ai with our unified cloud software, 
          designed to help you break down silos between departments and increase 
          organizational efficiency.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>

      {/* Right Section (Image) */}
      <div className="right-section">
        <img src={overlay} alt="Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Operating;
