import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useWishlist } from '../WishListContext';
import styles from './MovieDetail.module.css';
import { Link } from 'react-router';

//const apiKey = process.env.API_KEY;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { addToWishlist } = useWishlist();

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fc5cd7d2454789c3e684030e09f742bb`)
      .then(response => response.json())
      .then(data => setMovie(data));

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=fc5cd7d2454789c3e684030e09f742bb`)
      .then(response => response.json())
      .then(data => setCast(data.cast.slice(0, 10)));

    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=fc5cd7d2454789c3e684030e09f742bb`)
      .then(response => response.json())
      .then(data => setSimilarMovies(data.results));
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Average Rating: {movie.vote_average}</p>
      <h2>Main Cast</h2>

      <ul className={styles.customlist}>
        {cast.map(actor => (
            <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} style={{ width: '50px', height: 'auto' }}/>
            {actor.name} as {actor.character}
            </li>
            
   
        ))}
      </ul>

      <button className={styles.button} onClick={() => addToWishlist(movie)}>Add to Wishlist</button>
      <h2>Similar Movies</h2>
      <div className={styles.similarMovies}>
      <div className={styles.grid}>
        {similarMovies.map(similarMovie => (
          <div className={styles.jacket} key={similarMovie.id}>
            <h3>{similarMovie.title}</h3>
            <Link to={`/movie/${similarMovie.id}`} onClick={scrollToTop}>
            <img src={`https://image.tmdb.org/t/p/w500/${similarMovie.poster_path}`} alt={similarMovie.title} />
            </Link>
            </div>
          
        ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
