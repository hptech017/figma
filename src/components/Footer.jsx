import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // React Icons
import badge1 from "../assets/badge-1.png";
import badge2 from "../assets/badge-2.png";
import badge3 from "../assets/badge-3.png";
// import certificate1 from "../assets/certificate-1.png";
import certificate2 from "../assets/certificate-2.png";
import certificate3 from "../assets/certificate-3.png";
import appStore from "../assets/app-store.png";
import playStore from "../assets/play-store.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>Task Management</li>
            <li>Task Automation</li>
            <li>Time Tracking</li>
            <li>Team Collaboration</li>
            <li>Charts and Reports</li>
            <li>Issue Tracking</li>
            <li>Gantt Charts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Analyst Speak</li>
            <li>Quick Start Guide</li>
            <li>Knowledge Base (FAQ)</li>
            <li>The Productivity Compass</li>
            <li>What's New</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Project Tracker</li>
            <li>What is project management?</li>
            <li>Free Project Management</li>
            <li>Project Management Tools</li>
            <li>Enterprise Project Management</li>
            <li>How to create a Gantt Chart in Excel</li>
            <li>Project Collaboration</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Compare With</h3>
          <ul>
            <li>Jira</li>
            <li>Monday.com</li>
            <li>ClickUp</li>
            <li>Microsoft Project</li>
            <li>Wrike</li>
            <li>Asana</li>
            <li>Smartsheet</li>
            <li>All Competitors</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>From Our Customers</h3>
          <ul>
            <li>Customer Stories</li>
            <li>Tweets</li>
            <li>Buzz</li>
          </ul>
        </div>
      </div>

          <div className="wrapper-1">
                {/* Contact */}
      <div className="footer-contact">
        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
        <a href="mailto:support@nexachain.com">support@nexachain.com</a>
      </div>

      {/* App Store & Play Store */}
      <div className="footer-apps">
        <img src={appStore} alt="App Store" />
        <img src={playStore} alt="Google Play" />
      </div>
      {/* Social Media */}
      <div className="footer-social">
        <RxCross2 className="social-icon" />
        <FaLinkedin className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>
    </div>
          <div className="big-wrapper">
          <div className="awards-wrapper">
              <h2>Awards</h2>
                   {/* Awards Section */}
      <div className="footer-awards">
        {/* Replace these images with your own award icons */}
        <img src={badge1} alt="Award 1" />
        <img src={badge2} alt="Award 2" />
        <img src={badge3} alt="Award 3" />
      </div>
    </div>


          <div className="wrapper-2">
              <h2>Choose Privacy .Choose Nexachain.ai</h2>
               {/* Certifications */}
      <div className="footer-certifications">
        <img src={certificate2} alt="Certification 1" />
        <img src={certificate2} alt="Certification 2" />
        <img src={certificate3} alt="Certification 3" />
      </div>
     </div>
     </div>

      {/* Search Bar */}
      <div className="footer-search">
        <input type="text" placeholder="Search for product overviews, FAQs, and more..." />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom">
        <p>© 2025, Nexachain.ai Pvt. Ltd. All Rights Reserved.</p>
        <ul>
          <li>Zoho Home</li>
          <li>Contact Us</li>
          <li>Security</li>
          <li>Compliance</li>
          <li>GDPR Policy</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
