import { ThemedText } from '@/components/themed-text';
import { LANGUAGES, LanguageCodeType } from '@/constants/languages';
import React from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  originalLanguage?: LanguageCodeType;
};

/**
 * Displays the original language of the movie.
 * Default english
 */
export function OriginalLanguage({ originalLanguage = 'en' }: Props) {
  return (
    <ThemedText style={styles.text}>
      {LANGUAGES[originalLanguage]}
    </ThemedText>
  );
}

const styles = StyleSheet.create({
  text: {
    opacity: 0.6,
    fontSize: 14,
  },
});
