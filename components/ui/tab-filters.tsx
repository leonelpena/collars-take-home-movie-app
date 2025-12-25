import { ThemedView } from '@/components/themed-view';
import { SPACES } from '@/constants/theme';
import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '../themed-text';

/**
 * Reusable sub-tab filters.
 */
export function TabFilters({ children }: { children: ReactNode}) {
  return (
    <ThemedView style={styles.container}>
      {children}
    </ThemedView>
  );
};

export function Filter({
  title,
  onPress,
  active = false,
}: {
  title: string,
  onPress: () => void,
  active?: boolean,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          // Change opacity when pressed state is true
          opacity: pressed ? 0.5 : 1.0,
        },
      ]}
    >
      <ThemedText
        type={active ? 'link' : 'default'}
        style={active ? styles.activeButton : styles.button}
      >
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: SPACES.LG,
    marginTop: SPACES.MD,
    marginBottom: SPACES.SM // We use smaller margin b/c movie-preview component already has a vertical margin
  },
  activeButton: {
    fontSize: 18,
    fontWeight: 800,
  },
  button: {
    fontSize: 18,
  }
});
