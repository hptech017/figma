import React from 'react';
import '../styles/Sidebar1.css';
import skype from '../assets/skype.png';
import linkedIn from '../assets/linkedin.png';
import email from '../assets/email.png';
import whatsApp from '../assets/whatsApp.png';
import mask from '../assets/mask.png';

const SideBar1 = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item whatsapp">
        <div className="sidebar-item-content">
          <div className="text">WhatsApp Now</div>
          <img src={whatsApp} alt="WhatsApp" />
        </div>
      </div>
      <div className="sidebar-item linkedin">
        <div className="sidebar-item-content">
          <div className="text">Contact on LinkedIn</div>
          <img src={linkedIn} alt="LinkedIn" />
        </div>
      </div>
      <div className="sidebar-item skype">
        <div className="sidebar-item-content">
          <div className="text">Contact on Skype</div>
          <img src={skype} alt="Skype" />
        </div>
      </div>
      <div className="sidebar-item email">
        <div className="sidebar-item-content">
          <div className="text">Send an Email</div>
          <img src={email} alt="Email" />
        </div>
          </div>
          <div className="sidebar-item mask">
        <div className="sidebar-item-content">
          <div className="text">Send an Email</div>
          <img src={mask} alt="mask" />
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
