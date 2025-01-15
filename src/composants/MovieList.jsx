import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import styles from './MovieList.module.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');
  //const navigate = useNavigate();

  useEffect(() => {
    fetchMovies(category);
  }, [category]);

  const fetchMovies = (category) => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=fc5cd7d2454789c3e684030e09f742bb`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  };

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=fc5cd7d2454789c3e684030e09f742bb`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  };

  return (
    <div>
      <div className={styles.topbar}>
        <div className={styles.logo}>YaazzzMovie</div>
        <div className={styles.menu}>
        <button onClick={() => setCategory('now_playing')}>Now Playing</button>
        <button onClick={() => setCategory('popular')}>Popular</button>
        <button onClick={() => setCategory('top_rated')}>Top Rated</button>
        <button onClick={() => setCategory('upcoming')}>Upcoming</button>
        <Link to={"/wishlist"}>Wish List</Link>
        </div>
        <input className={styles.searchbar}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.grid}>
        {movies.map(movie => (
            <div key={movie.id} className={styles.jacket}>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <p>Average Rating: {movie.vote_average}</p>
              <Link to={`/movie/${movie.id}`}>See Details</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
