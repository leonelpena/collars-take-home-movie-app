import { SavedMoviesContext } from '@/contexts/saved-movies-provider';
import { useContext } from 'react';

/**
 * Retrieves a single movie from the cache.
 * This hook folows SWR fectching style.
 */
export function useSavedMovie(movieId: string) {
  const {data, isLoading, error} = useContext(SavedMoviesContext);

  return {
    movie: data?.find(m => m.id === movieId) || null,
    isLoading,
    error,
  };
}

export default useSavedMovie;
