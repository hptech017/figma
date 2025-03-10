import React, { useState } from 'react';
import '../styles/ProductCard.css';
import arrowImg from '../assets/arrow.png';
import productImg from '../assets/product.png';

const ProductCard = ({ product, productDescription, productColor }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    console.log(isExpanded)

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

            {/* Product Image Section - Initially Hidden */}
            <div
                className={`image-container ${isExpanded ? "expanded" : ""}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <img className="product-image" src={productImg} alt="product-image" />
            </div>
        </div>
    );
};

export default ProductCard;
