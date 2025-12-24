import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

/**
 * Displays an error.
 */
export function UIError() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Ups, womething went wrong! Try again later</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
