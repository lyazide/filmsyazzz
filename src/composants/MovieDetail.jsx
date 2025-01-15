import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useWishlist } from '../WishListContext';
import styles from './MovieDetail.module.css';

//const apiKey = process.env.API_KEY;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { addToWishlist } = useWishlist();

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
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
      <button onClick={() => addToWishlist(movie)}>Add to Wishlist</button>
      <h2>Similar Movies</h2>
      <div className={styles.similarMovies}>
        {similarMovies.map(similarMovie => (
          <div className={styles.jacket} key={similarMovie.id}>
            <h3>{similarMovie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${similarMovie.poster_path}`} alt={similarMovie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
