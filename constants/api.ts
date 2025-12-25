export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || 'https://api.themoviedb.org/3';

export const POSTER_IMAGE_SIZE = {
  w92: '92',
  w154: '154',
  w185: '185',
  w342: '342',
  w500: '500',
  w780: '780',
} as const;

export type POSTER_IMAGE_SIZE_TYPE = typeof POSTER_IMAGE_SIZE[keyof typeof POSTER_IMAGE_SIZE];

export const API_ENDPOINTS = {
  movies: {
    // TODO: Pagination support can be added, alongside with other filters
    popular: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',

    // TODO: - Pagination support can be added
    // NOTE: - We keep the same var names as TMDB original query for '{min_date} and {max_date}'
    upcoming: (min_date: string, max_date: string) => `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${min_date}&release_date.lte=${max_date}`,
    movieById: (id: string) => `/movie/${id}?append_to_response=videos`,
  },
  images: {
    poster: (path: string, size: POSTER_IMAGE_SIZE_TYPE) => `https://image.tmdb.org/t/p/w${size}/${path}`,
  },
  genres: '/genre/movie/list?language=en-US',
};
