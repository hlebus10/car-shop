import React from 'react';
import styles from './Main.module.css';

function readBtn() {
  window.open('https://www.example.com', '_blank');
}



function PostCard({ post }) {
    return (
      <div className={styles['post-card']}>
        <h4 className={styles['post-card-title']}>{post.title}</h4>
        <p className={styles['post-card-body']}>{post.body}</p>
        <button className={styles['read-more-btn']} onClick={readBtn}>Read More</button>
      </div>
    );
  }

  export default PostCard;