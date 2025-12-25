import { API_ENDPOINTS } from '@/constants/api';
import { apiRequest } from '@/utils/api';
import { addDays, format } from 'date-fns';
import { useEffect, useState } from 'react';

/**
 * TODO: Add docs and move the below texto into readme:
 * I encapsulated the fetching logic into a hook.
 * This hook folows SWR fectching style.
 * For the sake of simplicity of the app, I did not added SWR.
 */
export function useUpcomingMovies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const minDate = addDays(new Date(), 1); // Tomorrow
  const maxDate = addDays(minDate, 60); // 60 days from tomorrow

  useEffect(() => {
    apiRequest(API_ENDPOINTS.movies.upcoming(format(minDate, 'yyyy-MM-dd'), format(maxDate, 'yyyy-MM-dd')))
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

export default useUpcomingMovies;
