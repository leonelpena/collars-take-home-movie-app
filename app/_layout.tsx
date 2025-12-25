import { CloseButton } from '@/components/ui/close-button';
import { GenreListProvider } from '@/contexts/genre-provider';
import { SavedMoviesProvider } from '@/contexts/saved-movies-provider';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
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
          <SavedMoviesProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
          </SavedMoviesProvider>
        </GenreListProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
