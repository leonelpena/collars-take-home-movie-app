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

/**
 * Retrieves all saved movies
 */
export async function getAllMovies() {
  try {
    const allMoviesIDs = await AsyncStorage.getAllKeys();

    if (!allMoviesIDs || allMoviesIDs.length === 0) {
      return [];
    }

    const pairs = await AsyncStorage.multiGet(allMoviesIDs);
    
    // multiGet return [key, pair] so we have to map it, also filtering out nulls
    return pairs
      .map(([key, value]) => (value ? JSON.parse(value) : null))
      .filter((movie) => movie !== null);
  } catch (error) {
    console.error("Error fetching all movies:", error);
    return [];
  }
}