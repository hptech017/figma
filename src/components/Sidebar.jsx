import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#" className="sidebar-item skype">
        <FontAwesomeIcon icon={faSkype} className="icon" />
        <span>Contact on Skype</span>
      </a>
      <a href="#" className="sidebar-item linkedin">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <span>Contact on LinkedIn</span>
      </a>
      <a href="#" className="sidebar-item mail">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span>Contact on Mail</span>
      </a>
      <a href="#" className="sidebar-item demos">
        <FontAwesomeIcon icon={faBookOpen} className="icon" />
        <span>Book or Take Free Trials of Demos</span>
          </a>
          
    </div>
  );
};

export default Sidebar;
