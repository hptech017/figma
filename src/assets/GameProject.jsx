import React from "react";
import "../styles/GameProject.css";
import gameBg from "../assets/gameBg.png";
import gameVideo from "../assets/gameVideo.mp4";

const GameProject = () => {
  return (
    <div className="game-section" style={{ backgroundImage: `url(${gameBg})` }}>
      <div className="project-container">
              <div className="harsit">
              <p className="top-text">
          BECOME A VIRTUAL LANDLORD TO SOME OF THE LARGEST PROJECTS IN CRYPTO
        </p>
        <h1 className="main-title">GAME PROJECT</h1>
        <button className="btn">MORE INFORMATION</button>
        </div>

        <video autoPlay loop muted src={gameVideo} className="gameVideo"></video>

        {/* ✅ Place Marquee Below Video */}
        <div className="marquee-container">
          <div className="marquee">
            <span> PLAY, EARN, AND TRADE IN THE METAVERSE </span>
            <span> | NEXT-GEN GAMING EXPERIENCE </span>
            <span> | JOIN THE VIRTUAL REVOLUTION </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProject;
