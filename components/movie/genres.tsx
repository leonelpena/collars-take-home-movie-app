import { ThemedText } from '@/components/themed-text';
import { GenreListContext } from '@/contexts/genre-provider';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  genreIds: number[];
};

/**
 * Displays the movie genres. It takes the genres from
 * the context.
 */
export function Genres({ genreIds }: Props) {
  const { genres, isLoading, error } = useContext(GenreListContext);

  const names = genreIds
    .map(id => genres[id].name)
    .filter(Boolean)
    .slice(0, 2);

  return (
    <ThemedText style={styles.text}>
      {names.join(' · ')}
    </ThemedText>
  );
}

const styles = StyleSheet.create({
  text: {
    opacity: 0.6,
    fontSize: 14,
  },
});
