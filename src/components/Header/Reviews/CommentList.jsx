import React from 'react';
import styles from './Reviews.module.css';

function CommentList({ comments }) {
  const formatEmail = (email) => {
    return email.toLowerCase();
  };

  const capitalizeFirstWord = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <ul className={styles.commentList}>
      {comments.map(comment => (
        <li key={comment.id} className={styles.comment}>
          <h3>{capitalizeFirstWord(comment.name)}</h3>
          <p>{formatEmail(comment.email)}</p>
          <p>{capitalizeFirstWord(comment.body)}</p>
          <hr className={styles.divider} />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
