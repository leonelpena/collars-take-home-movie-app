import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SPACES } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
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
 */
export function HighlightedInfo({
  runtime,
  status,
  releaseDate,
}: Props) {
  const backgroundColor = useThemeColor({}, 'separator');

  return (
    <ThemedView style={styles.summaryInfoContainer}>
      <ThemedView style={styles.summaryInfoItem}>
        <ThemedText type="muted">Duration</ThemedText>
        <ThemedText type="defaultSemiBold">
          {runtime} min
        </ThemedText>
      </ThemedView>
      <ThemedView style={[styles.summaryInfoSeparator, { backgroundColor }]} />
      <ThemedView style={styles.summaryInfoItem}>
        <ThemedText type="muted">Status</ThemedText>
        <ThemedText type="defaultSemiBold">{status}</ThemedText>
      </ThemedView>
      <ThemedView style={[styles.summaryInfoSeparator, { backgroundColor }]} />
      <ThemedView style={styles.summaryInfoItem}>
        <ThemedText type="muted">Date</ThemedText>
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
  },
});

export default HighlightedInfo;