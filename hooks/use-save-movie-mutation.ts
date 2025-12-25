import { SavedMoviesContext } from '@/contexts/saved-movies-provider';
import { saveMovie as persistMovie } from '@/utils/storage';
import { useContext } from 'react';

/**
 * Mutation hook to persist a movie for offline usage.
 * This hook folows SWR mutation style.
 *
 * Usage example:
 *
 * // At the beginning of the component:
 * const { saveMovie } = useSaveMovieMutation(movieId);
 * // and to trigger the mutation inside an event:
 * saveMovie(movie);
 */
export function useSaveMovieMutation(movieId: string) {
  const {isLoading, error, syncCache} = useContext(SavedMoviesContext);

  const saveMovie = async (movie: any) => {
    if (isLoading || error) {
      return;
    }

    await persistMovie(movieId, movie);
    syncCache();
  }

  return {
    saveMovie
  };
}

export default useSaveMovieMutation;
