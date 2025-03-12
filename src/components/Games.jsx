import React from "react";
import "../styles/Games.css";
import decentralisedVideo from "../assets/decentralised.mp4"; 
import gameBg from "../assets/gameBg.png"
// import gamicImage from "../assets/gamic2.jpg"; 

const Games = () => {
  return (
    <div className="games-container">
      {/* ✅ Video Masked Text */}
      <div className="video-wrapper">
        <div className="title">
          <video autoPlay loop muted className="text-video">
            <source src={decentralisedVideo} type="video/mp4" />
          </video>
          <span>DECENTRALISED METAVERSE</span>
        </div>
      </div>

      {/* ✅ GAMIC Image Mask */}
      <div className="image-wrapper">
        <h1 className="text-overlay">GAMIC</h1>
          </div>

       
      </div>
      
      
  );
};

export default Games;
