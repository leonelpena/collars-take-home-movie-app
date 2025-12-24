import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';
import { Poster } from './poster';
import { Rating } from './rating';

type Props = {
  movie: any;
};

/**
 * Displays a single movie .
 * TODO: Implement movie type
 */
export function MoviePreview({ movie }: Props) {
  // const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.posterContainer}>
        <Poster path={movie.poster_path} />
      </ThemedView>
      <ThemedView style={styles.textContainer}>
        <ThemedText type="subtitle">{movie.title}</ThemedText>
        <Rating voteAverage={movie.vote_average} />
        <ThemedText>
          {movie.overview.length > 100 ? `${movie.overview.substring(0, 97).trim()}...` : movie.overview}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 20,
    marginVertical: 15,
  },
  posterContainer: {
    width: 150, // We set a fixed width
    flexShrink: 0, // and here tell flexbox to not shrink if needs more space
  },
  textContainer: {
    flex: 1, // Text uses the remaining space
    rowGap: 10
  }
});
