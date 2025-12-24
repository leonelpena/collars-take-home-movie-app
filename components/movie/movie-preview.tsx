import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Genres } from './genres';
import { OriginalLanguage } from './language';
import { Poster } from './poster';
import { Rating } from './rating';

type Props = {
  movie: any;
  showOverview?: boolean;
};

/**
 * Displays a single movie .
 * TODO: Implement movie type
 */
export function MoviePreview({
  movie,
  showOverview = false,
}: Props) {
  // const theme = useColorScheme() ?? 'light';
  const router = useRouter();

  const onPress = () => {
    router.push({
      pathname: '/movie/[id]',
      params: { id: movie.id },
    });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <ThemedView style={styles.posterContainer}>
        <Poster path={movie.poster_path} />
      </ThemedView>
      <ThemedView style={styles.textContainer}>
        <ThemedText type="subtitle">{movie.title}</ThemedText>
        <Rating voteAverage={movie.vote_average} />
        {
          showOverview &&
          <ThemedText>
            {movie.overview.length > 90 ? `${movie.overview.substring(0, 87).trim()}...` : movie.overview}
          </ThemedText>
        }
        {/* "genre_ids" is present in list of movies and "genres" comes in movie by id, I used different props to know its origin */}
        <Genres genreIds={movie.genre_ids} genres={movie.genres} />
        <OriginalLanguage originalLanguage={movie.original_language} />
      </ThemedView>
    </TouchableOpacity>
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
