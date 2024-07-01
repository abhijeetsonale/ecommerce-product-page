// src/components/ProductDetailsModal.js

import React from 'react';
import Modal from 'react-modal';

const ProductDetailsModal = ({ isOpen, product, onClose }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Product Details">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ProductDetailsModal;
