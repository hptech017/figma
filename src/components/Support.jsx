import React from "react";
import "../styles/Support.css";
import heroImage from "../assets/heroImage.png"; // Replace with actual image path
import teamImage1 from "../assets/team-1.jpg"; // Replace with actual images
// import teamImage2 from "../assets/team2.png";
// import teamImage3 from "../assets/team3.png";

const Support = () => {
  return (
    <div className="support-container">
      {/* 🌟 Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Adapting and Thriving in a Changing World</h1>
          <p>
            Our comprehensive guide to strategies for entrepreneurs and leaders
            offers valuable insights, practical advice.
          </p>
          <div className="button-group">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More →</button>
          </div>
        </div>

        <div className="hero-info">
          <h2>500+ <span>Services</span></h2>
          <div className="team-section">
            <img src={teamImage1} alt="Team 1" />
            <img src={teamImage1} alt="Team 2" />
            <img src={teamImage1} alt="Team 3" />
            <p>Connect With Our Best Team</p>
          </div>
          <button className="play-button">▶</button>
        </div>
      </div>

      {/* 🌊 Hero Image */}
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>

      {/* 🔄 Scrolling Support Banner */}
      <div className="support-banner">
        <div className="banner-content">
          <span>🌟 24/7 SUPPORT</span>
          <span>🌟 GET WORK TOGETHER</span>
          <span>🌟 HIGH QUALITY COTTON</span>
          <span>🌟 24/7 SUPPORT</span>
          <span>🌟 GET WORK TOGETHER</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
