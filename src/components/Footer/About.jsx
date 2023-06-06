import React from 'react';
import styles from './Footer.module.css'

export default function About() {
  return (
    <div className={styles['about-container']}>
      <div className={styles['about-img']}>
        <img src="https://svgsilh.com/svg/2546164.svg" alt="dealer" />
      </div>
      <div className={styles['about-text']}>
        <h2 className={styles['about-h2']}>
          About us
        </h2>
        <p className={styles['about-p']}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, et? Optio ullam rem aperiam nulla deserunt laudantium illum architecto dolorum minus delectus inventore, fugit sunt dignissimos ipsam voluptates placeat reiciendis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur obcaecati perferendis est repellat molestias! Obcaecati assumenda fugiat consequatur, amet cupiditate rerum quae velit ipsum hic culpa. Eos, soluta? Animi, architecto!
        </p>
      </div>
    </div>
  )
}
