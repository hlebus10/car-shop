import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import Pagination from './Pagination';
import Loading from '../Main/Loading';
import styles from './Reviews.module.css';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchComments(currentPage);
  }, [currentPage]);

  const fetchComments = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
      setComments(response.data);
    } catch (error) {
      console.error('Error:', error);
      setComments([]);
    } finally {
      setLoading(false);
    }
  };


  const handleNextPage = () => {
    setCurrentPage(prevPage => {
      const nextPage = prevPage + 10;
      return nextPage > 50 ? 50 : nextPage;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => {
      const newPage = prevPage - 10;
      return newPage < 1 ? 1 : newPage;
    });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = currentPage - 5;
    let endPage = currentPage + 4;

    if (startPage < 1) {
      startPage = 1;
      endPage = 10;
    }

    if (endPage > 50) {
      endPage = 50;
      startPage = 41;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          disabled={i === currentPage}
          className={i === currentPage ? styles.activePage : ''}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reviews from our customers</h1>
      {loading ? <Loading /> : <CommentList comments={comments} />}
      <Pagination
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        renderPageNumbers={renderPageNumbers}
      />
    </div>
  );
}

export default Reviews;
