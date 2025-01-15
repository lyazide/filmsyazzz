
import { useState, useEffect } from 'react';
import {WishlistContext} from './WishListContext'

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);
  
    const addToWishlist = (movie) => {
      setWishlist((prevWishlist) => {
        if (prevWishlist.some(item => item.id === movie.id)) { 
          return prevWishlist; 
        } return [...prevWishlist, movie];
      });
    };
  
    const removeFromWishlist = (movieId) => {
      setWishlist((prev) => {
        const updatedWishlist = prev.filter(movie => movie.id !== movieId);
        return updatedWishlist;
      });
    };
  
    return (
      <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
        {children}
      </WishlistContext.Provider>
    );
  };