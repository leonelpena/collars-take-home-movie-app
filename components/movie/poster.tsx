import { API_ENDPOINTS, POSTER_IMAGE_SIZE, POSTER_IMAGE_SIZE_TYPE } from '@/constants/api';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type Props = {
  path: string;
  width?: POSTER_IMAGE_SIZE_TYPE;
};

/**
 * Displays the movie poster.
 */
export function Poster({ path, width = POSTER_IMAGE_SIZE.w500 }: Props) {
  return (
    <Image
      source={{
        uri: API_ENDPOINTS.images.poster(path, width),
      }}
      style={{
        width: '100%', // The fixed width is set by its parent
        aspectRatio: 2 / 3, // and we always keep the TMDB original aspecto ratio
        borderRadius: 10,
      }}
      contentFit="cover"
      cachePolicy="disk"
    />
  );
}

const styles = StyleSheet.create({

});
