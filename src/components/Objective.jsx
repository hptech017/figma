import React from "react";
import "../styles/Objective.css";
import aiImage from "../assets/ai-image.png"; // Replace with your actual image path
import blockchainImage from "../assets/blockchain-image.png"; // Replace with your actual image path

const Objective = () => {
    console.log(aiImage);
    console.log(blockchainImage);
  return (
    <div className="objective-container">
      <h2 className="objective-title">
        Delivering <span className="highlight">Web3</span> Strategic Objectives
      </h2>
      <div className="objective-cards">
        {/* Blockchain Card */}
        <div className="objective-card blockchain">
          <div className="card-content">
            <h3>BLOCKCHAIN</h3>
            <p>
              Antier delivers breakthrough blockchain solutions to shape the next generation
              of enterprises, moving smarter and faster than ever.
            </p>
            <div className="buttons">
              <button className="btn">Get Started</button>
              <span>Try it for FREE DEMO</span>
            </div>
          </div>
        </div>

        {/* AI Card */}
        <div className="objective-card ai">
          <div className="card-content">
            <h3>Artificial Intelligence</h3>
            <p>
              We activate next-generation autonomous algorithms and generate highly
              actionable predictions to achieve true north for your business.
            </p>
            <div className="buttons">
              <button className="btn">Get Started</button>
              <span>Try it for FREE DEMO</span>
            </div>
          </div>
              </div>
              
              {/* VR CARD */}
              <div className="objective-card vr">
          <div className="card-content">
            <h3>Metaverse</h3>
            <p>
              We create the critical mass needed to help organizations mark their
              breakthrough moments in new virtual environments.
            </p>
            <div className="buttons">
              <button className="btn">Get Started</button>
              <span>Try it for FREE DEMO</span>
            </div>
          </div>
              </div>
              
              {/* FINANCE CARD */}
              <div className="objective-card finance">
          <div className="card-content">
            <h3>Finance Solutions</h3>
            <p>
             Through the lens of our extensive industry expertise, we offer a
             customized suite of capabilities designed to address your specific use cases.
            </p>
            <div className="buttons">
              <button className="btn">Get Started</button>
              <span>Try it for FREE DEMO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
