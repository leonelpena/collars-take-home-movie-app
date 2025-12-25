import { MoviePreview } from '@/components/movie/movie-preview';
import { ThemedSafeAreaView } from '@/components/themed-safe-are-view';
import { ThemedText } from '@/components/themed-text';
import { FadeInDownAnimation } from '@/components/ui/fadein-down-animation';
import { Loading } from '@/components/ui/loading';
import { UIError } from '@/components/ui/ui-error';
import { SPACES } from '@/constants/theme';
import { SavedMoviesContext } from '@/contexts/saved-movies-provider';
import { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';

export default function SavedMoviesScreen() {
  const {data, isLoading, error} = useContext(SavedMoviesContext);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <UIError />;
  }

  // console.log("SavedMoviesScreen");
  // console.debug(data);

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedText type="title">Saved</ThemedText>
      <FlatList
        data={data || []}
        renderItem={({ item, index }) => (
          <FadeInDownAnimation mutiplierDelay={index}>
            <MoviePreview movie={item} preview />
          </FadeInDownAnimation>
        )}
        keyExtractor={item => item.id}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACES.MD,
  },
});
