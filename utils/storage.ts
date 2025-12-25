import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Saves a movie data for offline use
 */
export function saveMovie(id: string, movie: any) {
  const movieId = id.toString();
  if (!movieId) {
    throw Error('Missing movie ID');
  }
  const jsonValue = JSON.stringify(movie);
  return AsyncStorage.setItem(movieId, jsonValue);
}

/**
 * Retrieves a movie by ID
 */
export async function getMovie(id: string) {
  const movieId = id.toString();
  if (!movieId) {
    throw Error('Missing movie ID');
  }
  const jsonValue = await AsyncStorage.getItem(movieId);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
}

/**
 * Unsave a movie by ID
 */
export function removeMovie(id: string) {
  const movieId = id.toString();
  if (!movieId) {
    throw Error('Missing movie ID');
  }
  return AsyncStorage.removeItem(movieId.toString());
}
