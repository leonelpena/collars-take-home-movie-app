import { getAllMovies } from '@/utils/storage';
import { useEffect, useState } from 'react';

/**
 * TODO: Add docs and move the below texto into readme:
 * I encapsulated the fetching logic into a hook.
 * This hook folows SWR fectching style.
 * For the sake of simplicity of the app, I did not added SWR.
 */
export function useSavedMovies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllMovies()
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

export default useSavedMovies;
