import React, { useState ,useEffect} from 'react';
import '../styles/ProductCard.css';
import arrowImg from '../assets/arrow.png';
import productImg from '../assets/product.png';

const ProductCard = ({ product, productDescription, productColor }) => {
    // Load state from localStorage
    const [isExpanded, setIsExpanded] = useState(() => {
        return localStorage.getItem('isExpanded') === 'true';
    });

    return (
        <div className="product-container">
            {/* Product Text Section */}
            <div className="product-text">
                <span className="mlm-label" style={{ color: productColor }}>MLM</span>

                <h2 className="productName">
                    {product}
                    <span className="arrow">
                        <img className='arrowImg' src={arrowImg} alt="arrow-icon" width="80" />
                    </span>
                </h2>

                <p className="product-content">{productDescription}</p>
            </div>

            {/* Product Image Section */}
            <div
                className={`image-container ${isExpanded ? "expanded" : ""}`}
                onClick={() => {
                    const newState = !isExpanded;
                    setIsExpanded(newState);
                    localStorage.setItem('isExpanded', newState); // Store in localStorage
                }}
            >
                <img className="product-image" src={productImg} alt="product-image" />
            </div>
        </div>
    );
};

export default ProductCard;
