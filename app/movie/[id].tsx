import { HighlightedInfo } from '@/components/movie/highlighted-info';
import { MoviePreview } from '@/components/movie/movie-preview';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Loading } from '@/components/ui/loading';
import { UIError } from '@/components/ui/ui-error';
import { SPACES } from '@/constants/theme';
import { useMovieDetails } from '@/hooks/use-movie-details';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function MovieById() {
  const { id: movieId } = useLocalSearchParams();
  const { data, isLoading, error } = useMovieDetails(movieId);

  console.log(data);

  if (isLoading || !data) {
    return <Loading />;
  }

  if (error) {
    return <UIError />;
  }

  return (
    <ThemedView style={styles.container}>
      <MoviePreview movie={data} />
      <HighlightedInfo
        runtime={data.runtime}
        status={data.status}
        releaseDate={data.release_date}
      />
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Synopsis</ThemedText>
        <ThemedText>
          {data.overview}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACES.MD,
  },
  section: {
    flexDirection: 'column',
    rowGap: SPACES.SM,
    marginVertical: SPACES.SM,
  },
});
