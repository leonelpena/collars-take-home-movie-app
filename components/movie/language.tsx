import { ThemedText } from '@/components/themed-text';
import { LANGUAGES, LanguageCodeType } from '@/constants/languages';
import React from 'react';

type Props = {
  originalLanguage?: LanguageCodeType;
};

/**
 * Displays the original language of the movie.
 * Default english
 */
export function OriginalLanguage({ originalLanguage = 'en' }: Props) {
  return (
    <ThemedText type="muted">
      Language: {LANGUAGES[originalLanguage]}
    </ThemedText>
  );
}
