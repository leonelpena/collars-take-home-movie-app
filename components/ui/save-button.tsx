import { getMovie, removeMovie, saveMovie } from '@/utils/storage';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  movieId: string;
  movie: any;
};

/**
 * Save and unsaved a movie for offline usage.
 */
export function SaveButton({ movieId, movie }: Props) {
  const [isMovieSaved, setIsMovieSaved] = useState(false);

  const handleOnPress = async () => {
    if (isMovieSaved) {
      await removeMovie(movieId);
      setIsMovieSaved(false);
    } else {
      await saveMovie(movieId, movie);
      setIsMovieSaved(true);
    }
  };

  useEffect(() => {
    (async () => {
      const savedMovie = await getMovie(movieId);
      setIsMovieSaved(savedMovie !== null && typeof savedMovie !== 'undefined');
    })()
  }, []);

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
