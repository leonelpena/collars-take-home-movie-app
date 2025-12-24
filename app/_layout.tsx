import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { CloseButton } from '@/components/ui/close-button';
import { GenreListProvider } from '@/contexts/genre-provider';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <GenreListProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            <Stack.Screen
              name="movie/[id]"
              options={{
                presentation: 'modal',
                title: 'Movie details',
                headerRight: () => <CloseButton />
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </GenreListProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
