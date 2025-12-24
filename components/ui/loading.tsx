import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * Displays a spinner.
 */
export function Loading() {
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator color={theme === 'light' ? Colors.light.icon : Colors.dark.icon} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
