import { useState } from "react";
import "./product.css";
import productImage from "../assets/product.jpg";

const ProductSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleImage = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="product-section">
      {/* Left Side: Text Content */}
      <div className="product-info">
        <h2 className="section-title">Product ↗</h2>
        <p className="section-description">
          Welcome Studio gives you all the tools you need to create and host virtual
          experiences that look awesome and put your brand centerstage.
        </p>
      </div>

      {/* Right Side: Expandable Image */}
      <div
        className={`image-container ${isExpanded ? "expanded" : ""}`}
        onClick={toggleImage}
      >
        <img
          src={productImage}
          alt="Product"
          className="product-image"
        />
      </div>
    </div>
  );
};

export default ProductSection;
