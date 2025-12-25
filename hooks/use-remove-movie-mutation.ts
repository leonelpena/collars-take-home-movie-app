import { SavedMoviesContext } from '@/contexts/saved-movies-provider';
import { removeMovie as removePersistentMovie } from '@/utils/storage';
import { useContext } from 'react';

/**
 * Mutation hook to remove a movie from the persistent storage
 * This hook folows SWR mutation style.
 *
 * Usage example:
 *
 * // At the beginning of the component:
 * const { removeMovie } = useRemoveMovieMutation(movieId);
 * // and to trigger the mutation inside an event:
 * removeMovie();
 */
export function useRemoveMovieMutation(movieId: string) {
  const {isLoading, error, syncCache} = useContext(SavedMoviesContext);

  const removeMovie = async () => {
    if (isLoading || error) {
      return;
    }

    await removePersistentMovie(movieId);
    syncCache();
  }

  return {
    removeMovie
  };
}

export default useRemoveMovieMutation;
