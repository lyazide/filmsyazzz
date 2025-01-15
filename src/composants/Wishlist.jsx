import { useWishlist } from '../WishListContext';
import styles from './Wishlist.module.css';
import { Link } from 'react-router';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  
  return (
    <div className={styles.movie}>
      <div className={styles.terminal}>
    <h1>Wishlist</h1>
    </div>
    <div className={styles.grid}>
      {wishlist.map(movie => (
        <div key={movie.id} className={styles.jacket}>
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </Link>
          <p>Average Rating: {movie.vote_average}</p>
          <Link to={`/movie/${movie.id}`}> <button className={styles.button}>See Details</button> </Link>
          <button className={styles.button} onClick={() => removeFromWishlist(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Wishlist;
