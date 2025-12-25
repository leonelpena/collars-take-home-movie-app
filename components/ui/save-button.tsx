import useRemoveMovieMutation from '@/hooks/use-remove-movie-mutation';
import useSaveMovieMutation from '@/hooks/use-save-movie-mutation';
import useSavedMovie from '@/hooks/use-saved-movie';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  movieId: string;
  movie: any;
};

/**
 * Save and remove a movie for offline usage.
 */
export function SaveButton({ movieId, movie }: Props) {
  const {movie: savedMovie, isLoading, error} = useSavedMovie(movieId);
  const isMovieSaved = !!savedMovie;

  const { saveMovie } = useSaveMovieMutation(movieId);
  const { removeMovie } = useRemoveMovieMutation(movieId);

  const handleOnPress = async () => {
    if (isLoading || error) {
      return null;
    }

    if (isMovieSaved) {
      removeMovie();
    } else {
      saveMovie(movie);
    }
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.button}>
      <Ionicons
        name={isMovieSaved ? "heart" : "heart-outline"}
        size={20}
        color="red"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // marginHorizontal: SPACES.SM,
  },
});
