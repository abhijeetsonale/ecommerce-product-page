// src/components/ProductSort.js

import React from 'react';

const ProductSort = ({ onSortChange }) => {
  return (
    <div className="product-sort">
      <label>Sort by:</label>
      <select onChange={onSortChange}>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name_asc">Name: A-Z</option>
        <option value="name_desc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default ProductSort;
