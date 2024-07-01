// src/components/ProductFilter.js

import React from 'react';

const ProductFilter = ({ categories, onFilterChange, onPriceChange }) => {
  return (
    <div className="product-filter">
      <label>Filter by Category:</label>
      <select onChange={onFilterChange}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label>Price Range:</label>
      <input type="range" min="0" max="1000" onChange={onPriceChange} />
    </div>
  );
};

export default ProductFilter;
