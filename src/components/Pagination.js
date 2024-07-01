// src/components/Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={currentPage === i ? 'active' : ''}
      >
        {i}
      </button>
    );
  }

  return <div className="pagination">{pages}</div>;
};

export default Pagination;
