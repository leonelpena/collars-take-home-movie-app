import { ThemedText } from '@/components/themed-text';
import { GenreListContext } from '@/contexts/genre-provider';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

type GenreType = {
  id: number;
  name: string;
};

type Props = {
  genreIds?: number[];
  genres?: GenreType[];
};

/**
 * Displays the movie genres. It takes the genres from
 * the context.
 * "genre_ids" is present in list of movies and only brings its IDs (I use the context to pulled the names)
 * "genres" comes in movie by id and its brings id and name.
 * I used different props to know its origin.
 * When using "genre_ids" I only render two categories b/c
 * in the list there is space constraints.
 */
export function Genres({ genreIds, genres }: Props) {
  const { genres: genreList, isLoading, error } = useContext(GenreListContext);

  const names = genreIds
    ? genreIds.map(id => genreList[id].name).slice(0, 2)
    : genres?.map(({id, name}) => name) || [];

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
