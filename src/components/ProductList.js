// src/components/ProductList.js

import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
      ))}
    </div>
  );
};

export default ProductList;
