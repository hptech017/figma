import React from 'react'
import "../styles/NexaChainAi.css";
import nexa from "../assets/Nexa.png";
import chain from "../assets/Chain.png";
import ai from "../assets/AI.png";
import nexaImg from '../assets/nexa-chain-ai-img.png'

const NexaChainAi = () => {
  return (
    <section className="hero">
      <div className="nexa-chain-ai-container">
       <img className='hero_img' src={nexaImg} alt="nexa-img" />
      </div>

      <p className="hero-text">
        A cutting-edge and comprehensive software suite designed to transform the way you work.
        Whether you're a small start-up or a large enterprise, our solution adapts to your needs, 
        enhancing productivity and efficiency.
      </p>
    </section>
  );
};

export default NexaChainAi;
