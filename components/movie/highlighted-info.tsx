import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SPACES } from '@/constants/theme';
import { formatDate } from '@/utils/functions';
import { StyleSheet } from 'react-native';

type Props = {
  runtime: string;
  status: string;
  releaseDate: string;
}

/**
 * Display highlighted movie info as follow:
 *    Duration   |   Status    |    Date
 *    190 min    |   Released  |   Sep 17, 2025
 *
 * TODO: Missing dark support through theme
 *
 */
export function HighlightedInfo({
  runtime,
  status,
  releaseDate,
}: Props) {
  return (
    <ThemedView style={styles.summaryInfoContainer}>
      <ThemedView style={styles.summaryInfoItem}>
        <ThemedText type="soft">Duration</ThemedText>
        <ThemedText type="defaultSemiBold">
          {runtime} min
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.summaryInfoSeparator} />
      <ThemedView style={styles.summaryInfoItem}>
        <ThemedText type="soft">Status</ThemedText>
        <ThemedText type="defaultSemiBold">{status}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.summaryInfoSeparator} />
      <ThemedView style={styles.summaryInfoItem}>
        <ThemedText type="soft">Date</ThemedText>
        <ThemedText type="defaultSemiBold">{formatDate(releaseDate)}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  summaryInfoContainer: {
    flexDirection: 'row',
    columnGap: SPACES.SM,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: SPACES.SM,
  },
  summaryInfoItem: {
    alignItems: 'center',
  },
  summaryInfoSeparator: {
    width: 1,
    height: '80%',
    backgroundColor: '#687076', // Missing support for theme
    opacity: 0.6,
  },
});

export default HighlightedInfo;