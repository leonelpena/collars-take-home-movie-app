import { StyleSheet } from 'react-native';
import { Rating as RNRating } from 'react-native-ratings';

type Props = {
  voteAverage: number;
};

/**
 * Displays the movie rating as a 5 stars range.
 */
export function Rating({ voteAverage }: Props) {
  return (
    <RNRating
      type='star'
      ratingCount={5} // shows 5 stars
      imageSize={22}
      readonly // does not allow the user to change the rating
      startingValue={voteAverage / 2} // voteAverage range is 0 to 10, so we compress it into 0 to 5
      style={styles.rating}
    />
  );
}

const styles = StyleSheet.create({
  rating: {
    alignItems: 'flex-start',
  },
});
