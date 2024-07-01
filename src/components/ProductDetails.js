// src/components/ProductDetails.js

import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="product-details-page">
      <button onClick={onClose} className="close-btn">
        Close
      </button>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;
