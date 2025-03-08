import React from "react";
import "../styles/Product1.css";
import ourImage from '../assets/ourImage.png'
import ProductCard from "./ProductCard";

const Products = () => {

    const productName1 = "Product";
    const productDescription1 = " Welcome Studio gives you all the tools you need to create and hostvirtual experiences that look awesome and put your brandcenterstage.";
    const color1 = "red"
    
    const productName2 = "Invest";
    const productDescription2 = " Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.";
    const color2 = "red"
    
    const productName3 = "Crypto";
    const productDescription3 = " Track the success of your events with deep insights and analytics measured across the entire attendee experience.";
    const color3 = "red"
    


  return (
    <div className="products-container">
           <h2 className="section-title-container">
              <img  className="title-img" src={ourImage} alt="crypto-img" width='166px' />
              
              <div className="section-title">
              <span className="ur-product" >ur Product </span>
        <a href="#" className="discover-link">
          / Discover Us
        </a>
         </div>
          </h2>
      
          <div className="product-list">
          <ProductCard
        product={productName1}
        productDescription={productDescription1}
        color={color1}
      />
      <ProductCard
        product={productName2}
        productDescription={productDescription2}
        color={color2}
      />
      <ProductCard
        product={productName3}
        productDescription={productDescription3}
        color={color3}
      />
    
    </div>
    </div>
  );
};

export default Products;
