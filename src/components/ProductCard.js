import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: '1px solid black',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
