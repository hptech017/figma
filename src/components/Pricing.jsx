import React from "react";
import "../styles/Pricing.css"; // Import external CSS

import starterImg from "../assets/i-1.png"; // Replace with correct paths
import professionalImg from "../assets/i-2.png";
import enterpriseImg from "../assets/i-3.png";

const Pricing = () => {
  return (
      <div className="parent-pricing-container">
            <section className="pricing-container">
      <h2 className="pricing-title">Pricing Options</h2>
      <div className="pricing-cards">
        {/* Starter Plan */}
        <div className="pricing-card">
          <div className="pricing-content">
            <h3>Starter</h3>
            <p className="price">$19 <span>Per month</span></p>
            <p className="description">
              Get started with essential tools to create and maintain a professional website.
            </p>
            <button className="btn-3">Get Started</button>
          </div>
          <img src={starterImg} alt="Starter Plan" className="pricing-image" />
        </div>

        {/* Professional Plan */}
        <div className="pricing-card">
          <div className="pricing-content">
            <h3>Professional</h3>
            <p className="price">$79 <span>Per month</span></p>
            <p className="description">
              Enhance your website with more advanced tools and customization options.
            </p>
            <button className="btn-3">Get Started</button>
          </div>
          <img src={professionalImg} alt="Professional Plan" className="pricing-image" />
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <div className="pricing-content">
            <h3>Enterprise</h3>
            <p className="price">$199 <span>Per month</span></p>
            <p className="description">
              Fully customize and scale your website to match your business needs.
            </p>
            <button className="btn-3">Get Started</button>
          </div>
          <img src={enterpriseImg} alt="Enterprise Plan" className="pricing-image" />
        </div>
      </div>
    </section>
  </div>
  );
};

export default Pricing;
