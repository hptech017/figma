import React from "react";
import "../styles/Product1.css";
import ourImage from '../assets/ourImage.png';
import ProductCard from "./ProductCard";
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Products = () => {

    const productName1 = "Product";
    const productDescription1 = "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.";
    const color1 = "red";
    
    const productName2 = "Invest";
    const productDescription2 = "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.";
    const color2 = "#089949";
    
    const productName3 = "Crypto";
    const productDescription3 = "Track the success of your events with deep insights and analytics measured across the entire attendee experience.";
    const color3 = "#226DB4";

  return (
    <div className="products-container">
      <h2 className="section-title-container">
        <img className="title-img" src={ourImage} alt="crypto-img" width='166px' />
        <div className="section-title">
          <span className="ur-product">ur Product</span>
          <a href="#" className="discover-link">/ Discover Us</a>
        </div>
      </h2>

      <div className="find-section">
        <h1 className="find-it-works">
          Find <span className="highlight-text">it</span> works
        </h1>
        <div className="find-section-1">
          <p className="section-content">
            Manage your experience from start to finish, from integrations to
            registration and from interactive stage elements to post-event data,
            it’s all here.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>

      <div className="product-list">
        <ProductCard
          product={productName1}
          productDescription={productDescription1}
          productColor={color1}
          productImage={image1} // Pass image as prop
        />
        <ProductCard
          product={productName2}
          productDescription={productDescription2}
          productColor={color2}
          productImage={image2} // Pass image as prop
        />
        <ProductCard
          product={productName3}
          productDescription={productDescription3}
          productColor={color3}
          productImage={image3} // Pass image as prop
        />
      </div>
    </div>
  );
};

export default Products;
