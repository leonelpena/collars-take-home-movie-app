import { API_ENDPOINTS } from '@/constants/api';
import { apiRequest } from '@/utils/api';
import { useEffect, useState } from 'react';

/**
 * TODO: Add docs and move the below texto into readme:
 * I encapsulated the fetching logic into a hook.
 * This hook folows SWR fectching style.
 * For the sake of simplicity of the app, I did not added SWR.
 */
export function useMovieDetails(movieId: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest(API_ENDPOINTS.movies.movieById(movieId))
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export default useMovieDetails;
