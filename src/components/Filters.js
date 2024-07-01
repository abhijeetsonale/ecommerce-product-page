// src/components/Filters.js

import React, { useState } from 'react';

const Filters = ({ categories, onFilterChange, onPriceRangeChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));
    onPriceRangeChange({ ...priceRange, [name]: Number(value) });
  };

  return (
    <div className="filters">
      <div className="category-filter">
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="price-filter">
        <label>Price Range:</label>
        <input
          type="number"
          name="min"
          value={priceRange.min}
          onChange={handlePriceChange}
          placeholder="Min"
        />
        <input
          type="number"
          name="max"
          value={priceRange.max}
          onChange={handlePriceChange}
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default Filters;
