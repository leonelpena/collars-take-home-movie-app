import { MoviePreview } from '@/components/movie/movie-preview';
import { ThemedSafeAreaView } from '@/components/themed-safe-are-view';
import { ThemedText } from '@/components/themed-text';
import { FadeInDownAnimation } from '@/components/ui/fadein-down-animation';
import { Loading } from '@/components/ui/loading';
import { Filter, TabFilters } from '@/components/ui/tab-filters';
import { UIError } from '@/components/ui/ui-error';
import { SPACES } from '@/constants/theme';
import usePopularMovies from '@/hooks/use-popular-movies';
import useUpcomingMovies from '@/hooks/use-upcoming-movies';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

type FILTERS = "popular" | "upcoming";

export default function IndexScreen() {
  const [activeFilter, setActiveFilter] = useState<FILTERS>("popular");

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedText type="title">Movies</ThemedText>
      <TabFilters>
        <Filter title="Popular" onPress={() => setActiveFilter("popular")} active={activeFilter === "popular"} />
        <Filter title="Upcoming" onPress={() => setActiveFilter("upcoming")} active={activeFilter === "upcoming"} />
      </TabFilters>
      {activeFilter === "popular" && <PopularMovies />}
      {activeFilter === "upcoming" && <UpcomingMovies />}
    </ThemedSafeAreaView>
  );
}

const PopularMovies = () => {
  const {data, isLoading, error} = usePopularMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <UIError />;
  }

  return (
    <FlatList
      data={data?.results || []}
      renderItem={({ item, index }) => (
        <FadeInDownAnimation mutiplierDelay={index}>
          <MoviePreview movie={item} preview />
        </FadeInDownAnimation>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const UpcomingMovies = () => {
  const {data, isLoading, error} = useUpcomingMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <UIError />;
  }

  return (
    <FlatList
      data={data?.results || []}
      renderItem={({ item, index }) => (
        <FadeInDownAnimation mutiplierDelay={index}>
          <MoviePreview movie={item} preview />
        </FadeInDownAnimation>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACES.MD,
  },
});
