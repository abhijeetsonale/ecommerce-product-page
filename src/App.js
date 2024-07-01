// src/App.js

import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ProductPage />
      </div>
    </CartProvider>
  );
}

export default App;
