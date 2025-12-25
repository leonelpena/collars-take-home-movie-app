import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet } from 'react-native';
import { Rating as RNRating } from 'react-native-ratings';

type Props = {
  voteAverage: number;
};

/**
 * Displays the movie rating as a 5 stars range.
 */
export function Rating({ voteAverage }: Props) {
  const backgroundColor = useThemeColor({}, 'background');

  // voteAverage range is 0 to 10, so we compress it into 0 to 5
  const vote = Math.round(voteAverage / 2);

  return (
    <RNRating
      type='star'
      ratingCount={vote} // shows only the stars voted
      imageSize={22}
      readonly // does not allow the user to change the rating
      startingValue={vote}
      style={styles.rating}
      tintColor={backgroundColor}
    />
  );
}

const styles = StyleSheet.create({
  rating: {
    alignItems: 'flex-start',
  },
});
