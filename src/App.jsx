import { BrowserRouter as Router, Route, Routes } from 'react-router';
import MovieList from './composants/MovieList';
import MovieDetail from './composants/MovieDetail';
import Wishlist from './composants/Wishlist';
import { WishlistProvider } from './WishListContext.jsx';

const App = () => {
  return (
    <WishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
};

export default App;
