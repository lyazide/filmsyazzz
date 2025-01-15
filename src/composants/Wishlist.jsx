import { useWishlist } from '../WishListContext';
import styles from './Wishlist.module.css';
import { Link } from 'react-router';


const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
 // const navigate = useNavigate();
  
  return (
    <div className={styles.grid}>
      <h1>Wishlist</h1>
      {wishlist.map(movie => (
        <div key={movie.id} className={styles.jacket}>
          <h3>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p>Average Rating: {movie.vote_average}</p>
          <ul>
          <Link to={`/movie/${movie.id}`}>See Details</Link>
          </ul>
          <button onClick={() => removeFromWishlist(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
