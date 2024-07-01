// src/components/ShoppingCartModal.js
import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCartModal = ({ cartItems }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="shopping-cart-modal">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button  onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCartModal;
