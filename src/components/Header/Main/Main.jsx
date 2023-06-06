import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Main.module.css';
import Loading from './Loading';
import PostCard from './PostCard';

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data.slice(0, 6));
        setLoadingPosts(false);
        setShowMore(true);
      })
      .catch(error => {
        console.error(error);
        setLoadingPosts(false);
      });
  }, []);

  const loadMorePosts = () => {
    setLoadingPosts(true);
    axios.get('https://jsonplaceholder.typicode.com/posts?_start=6&_limit=3')
      .then(response => {
        setPosts(prevPosts => [...prevPosts, ...response.data]);
        setLoadingPosts(false);
      })
      .catch(error => {
        console.error(error);
        setLoadingPosts(false);
      });
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles['upper-img']}>
        <img src="https://img2.akspic.ru/crops/6/8/2/1/4/141286/141286-obod-dvigatel_v10-audi-audi_r8-avtomobil-3840x2160.jpg" alt="img1" />
      </div> */}
      <div className={styles.content}>
        <h1 className={styles['main-h1']}>Welcome to the main page!</h1>
        <h3 className={styles['main-h3']}>Here you can learn more about our company and what we do.</h3>
        <div className={styles['main-text']}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur ipsum tenetur numquam odit nihil nam error nobis consequuntur. Reiciendis qui natus tenetur molestiae magnam animi tempora quod velit exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus illo similique deserunt nisi numquam inventore dignissimos, reprehenderit commodi molestias! Sit recusandae, consequatur expedita molestiae minus accusamus ratione vitae dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia a suscipit corporis animi quo dolore hic explicabo, aperiam sapiente facere consectetur, aut fuga repellendus id? Ratione aliquam reiciendis ut!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias suscipit architecto quae fugiat nihil eligendi voluptatum labore possimus tempora excepturi, hic enim omnis, nam minus quod id laboriosam accusantium. Labore?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum repellendus ab, eum, explicabo, recusandae enim quae magnam id repellat sapiente nesciunt ipsa quam exercitationem iusto laboriosam voluptate reprehenderit laborum iste?
          </p>
        </div>
        <h3 className={styles['main-h3']}>We are the official distributor of many automotive giants. These are some of them:</h3>
        <div className={styles['image-container']}>
              <figure>
                <a href="https://www.audi.com/en.html" target='_blank'>
                  <img src="https://i.artfile.ru/2560x1440_1520484_[www.ArtFile.ru].jpg" alt="Audi" />
                  <figcaption className={styles['img-caption']}>Audi</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.mercedes-benz.com/en/" target='_blank'>
                  <img src="https://gamerwall.pro/uploads/posts/2022-06/1655895046_2-gamerwall-pro-p-mersedes-osenyu-oboi-3.jpg" alt="Mercedes" />
                  <figcaption className={styles['img-caption']}>Mercedes</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.lexus.com/" target='_blank'>
                  <img src="https://images.drive.ru/i/0/5ee87349ec05c4212400000f.jpg" alt="Lexus" />
                  <figcaption className={styles['img-caption']}>Lexus</figcaption>
                </a>
              </figure>
            </div>
            <h3 className={styles['main-h3']}>You also can read some articles about us:</h3>
        {loadingPosts ? (
          <Loading />
        ) : (
          <div>
            <div className={styles['post-grid']}>
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {showMore && (
              <button className={styles['load-more-btn']} onClick={loadMorePosts}>
                Load More
              </button>
            )}
          </div>
        )}
      </div>
      <h3 className={styles['main-end-h3']}>
      <a className={styles['avail-cars']} href="/available-cars">Here</a> you can explore the range of cars that we offer for sale
      </h3>
    </div>
  );
}
