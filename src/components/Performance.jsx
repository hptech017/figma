import React from "react";
import "../styles/Performance.css";
import clientsIcon from "../assets/clients.png"; // Replace with your actual path
import employeesIcon from "../assets/employess.png"; // Replace with your actual path
import retentionIcon from "../assets/retention.png"; // Replace with your actual path

const Performance = () => {
  return (
      <div className="parent-container">
           <div className="performance-container">
      <h2 className="performance-title">Agency Performance Overview</h2>

      {/* Top Stats Section */}
      <div className="stats-container">
        <div className="stat-box">
          <img src={clientsIcon} alt="Clients Served" />
          <h3>5240+</h3>
          <p className="stat-label">Clients Served</p>
          <p className="stat-desc">The number of clients currently served by the agency.</p>
        </div>

        <div className="stat-box">
          <img src={employeesIcon} alt="Employees" />
          <h3>200+</h3>
          <p className="stat-label">Employees</p>
          <p className="stat-desc">The total number of employees currently in our team.</p>
        </div>

        <div className="stat-box">
          <img src={retentionIcon} alt="Client Retention Rate" />
          <h3>90%</h3>
          <p className="stat-label">Client Retention Rate</p>
          <p className="stat-desc">The total number of Rate our agency has won.</p>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="details-container">
        <div className="detail-box">
          <p className="detail-title">Years in Business</p>
          <h3>15 years</h3>
          <p className="detail-desc">Established in 2009, providing exceptional.</p>
        </div>

        <div className="detail-box">
          <p className="detail-title">Headquarters</p>
          <h3>1 location</h3>
          <p className="detail-desc">Located in Bhopal, serving as our main.</p>
        </div>

        <div className="detail-box">
          <p className="detail-title">Projects Completed</p>
          <h3>500+</h3>
          <p className="detail-desc">Successfully completed over 500 projects across.</p>
        </div>

        <div className="detail-box">
          <p className="detail-title">Services Offered</p>
          <h3>5+</h3>
          <p className="detail-desc">Offering a diverse range of services including.</p>
        </div>

        <div className="detail-box">
          <p className="detail-title">Awards and Recognition</p>
          <h3>10+</h3>
          <p className="detail-desc">Awarded over 10 industry accolades for excellence.</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Performance;
