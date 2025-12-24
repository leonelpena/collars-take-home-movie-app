import { API_ENDPOINTS } from '@/constants/api';
import { apiRequest } from '@/utils/api';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const GenreListContext = createContext({
  genres: {},
  isLoading: true,
  error: null,
});

/**
 * It stores the genres as an object with id as key.
 * The fetch is performed the first time the component is mounted,
 * then all the category searches are done locally using the context.
 */
export const GenreListProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest(API_ENDPOINTS.genres)
      .then(res => {
        const indexedGenres = res.genres.reduce((obj, item) => {
          obj[item.id] = item; // We use the 'id' as the key, it simplifies and fasten the search later on
          return obj;
        }, {});
        console.debug(indexedGenres);
        setGenres(indexedGenres);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <GenreListContext.Provider value={{
      genres,
      isLoading,
      error,
    }}>
      {children}
    </GenreListContext.Provider>
  );
};
