import React from "react";
import "../styles/sidebar.css";
import skype from '../assets/skype.png';
import linkedIn from '../assets/linkedin.png';
import email from '../assets/email.png';
import whatsApp from '../assets/whatsApp.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#" className="sidebar-item skype">
        <img src={skype} alt="Skype" className="icon" />
        <span>Contact on Skype</span>
      </a>
      <a href="#" className="sidebar-item linkedin">
        <img src={linkedIn} alt="LinkedIn" className="icon" />
        <span>Contact on LinkedIn</span>
      </a>
      <a href="#" className="sidebar-item mail">
        <img src={email} alt="Mail" className="icon" />
        <span>Contact on Mail</span>
      </a>
      <a href="#" className="sidebar-item demos">
        <img src={whatsApp} alt="Demos" className="icon" />
        <span>Book or Take Free Trials of Demos</span>
      </a>
    </div>
  );
};

export default Sidebar;
