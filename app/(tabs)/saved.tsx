import { MoviePreview } from '@/components/movie/movie-preview';
import { ThemedSafeAreaView } from '@/components/themed-safe-are-view';
import { ThemedText } from '@/components/themed-text';
import { FadeInDownAnimation } from '@/components/ui/fadein-down-animation';
import { Loading } from '@/components/ui/loading';
import { UIError } from '@/components/ui/ui-error';
import { SPACES } from '@/constants/theme';
import { SavedMoviesContext } from '@/contexts/saved-movies-provider';
import { Ionicons } from '@expo/vector-icons';
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
      {data && data.length === 0 && (
        <ThemedText
          type="defaultSemiBold"
          style={styles.emptyList}
        >
          Save your favorite movies for later with <Ionicons name="heart-outline" size={20} color="red" /> icon
        </ThemedText>
      )}
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
  emptyList: {
    marginVertical: SPACES.LG,
  }
});
