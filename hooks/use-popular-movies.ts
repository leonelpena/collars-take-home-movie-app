import { API_ENDPOINTS } from '@/constants/api';
import { apiRequest } from '@/utils/api';
import { useEffect, useState } from 'react';

/**
 * TODO: Add docs and move the below texto into readme:
 * I encapsulated the fetching logic into a hook.
 * This hook folows SWR fectching style.
 * For the sake of simplicity of the app, I did not added SWR.
 */
export function usePopularMovies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest(API_ENDPOINTS.movies.popular)
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

export default usePopularMovies;
