import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Questions.css"; // Importing external CSS
import faqImage from "../assets/robot.png"; // Adjust the path if needed

const Questions = () => {
    return (
      <div className="parent-question-container">
             <div className="questions-container">
        <div className="questions-left">
          <h2 className="questions-title">Our Frequently Asked Questions</h2>
          <p className="questions-subtext">
            Have a question? <br />
            Find answers to common queries about our products and services.
          </p>
          <img src={faqImage} alt="FAQ Section" className="faq-image" />
        </div>
  
        <div className="questions-right">
          {[
            "Can I get more information about a product?",
            "Are your products covered by a warranty?",
            "Can I track my order?",
            "What are your shipping options?",
            "How long does shipping take?",
            "What payment methods do you accept?",
          ].map((question, index) => (
            <div className="faq-item" key={index}>
              <p>{question}</p>
              <div className="faq-arrow">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          ))}
        </div>
      </div>
 </div>
    );
  };
  
  export default Questions;