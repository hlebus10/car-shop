import React from 'react';
import styles from './Reviews.module.css';

function Pagination({ currentPage, handlePreviousPage, handleNextPage, renderPageNumbers }) {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        &larr;
      </button>
      {renderPageNumbers()}
      <button onClick={handleNextPage} disabled={currentPage === 50}>
        &rarr;
      </button>
    </div>
  );
}

export default Pagination;
