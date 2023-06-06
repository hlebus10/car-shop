import React from "react";
import styles from './Main.module.css';
import { ClipLoader } from 'react-spinners';

function Loading() {
    return (
      <div className={styles['loading-container']}>
        <ClipLoader color="#ffffff" loading={true} size={300} />
        <p className={styles['loading-text']}>Loading...</p>
      </div>
    );
  }

  export default Loading;