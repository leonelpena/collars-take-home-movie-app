import { getAllMovies } from '@/utils/storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const SavedMoviesContext = createContext({
  data: [],
  isLoading: true,
  error: null,
  syncCache: () => {},
});

/**
 * This provider acts as a cache for saved movies (persistent storage)
 * to facilitate the sync operation between screens when saving, removing and retrieving 
 * a single movie or all the movies.
 */
export const SavedMoviesProvider = ({ children }: { children: ReactNode }) => {
  const [data, setDate] = useState<any>([]); // TODO: Add movie[] type
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const syncCache = () => {
    getAllMovies()
      .then(res => setDate(res))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  };

  useEffect(() => syncCache(), []);

  return (
    <SavedMoviesContext.Provider value={{
      data,
      isLoading,
      error,
      syncCache,
    }}>
      {children}
    </SavedMoviesContext.Provider>
  );
};
