import React from "react";
import "../styles/Buisness.css";
import logo1 from "../assets/company-logo-1.png";

const logos = [
    logo1, // Logo 1
    logo1, // Logo 2
    logo1, // Logo 3
    logo1, // Logo 4
    logo1, // Logo 5
    logo1, // Logo 6
    logo1, // Logo 7
    logo1, // Logo 8
];

const Business = () => {
  return (
    <section className="business-section">
      <h2 className="business-title">Trusted by thousands of Businesses</h2>
      <p className="business-subtitle">
        More than 15,000 companies & partners trust and choose our services.
      </p>
      <div className="business-logos">
        {logos.map((logo, index) => (
          <div key={index} className="logo-card">
            <img src={logo} alt={`Business Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
