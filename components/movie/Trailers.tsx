import { ThemedScrollView } from '@/components/themed-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { SPACES } from '@/constants/theme';
import { useCallback, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

type SingleTrailer = {
  key: string;
  type: string;
  site: string;
  // There are more fields but we not needed for this demo
};

type Props = {
  videos: SingleTrailer[];
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.85; 

/**
 * Display a horizontal scrollable view with all the trailers.
 * For this demo it only supports YouYube videos and
 * because of performance we only show the first 3 videos.
 */
export function Trailers({ videos = [] }: Props) {
  // {
  //       videoNotAvailable && (
  //         <ThemedText>
  //           Could not load the video, try again later.
  //         </ThemedText>
  //       )
  //     }
  return (
    <ThemedScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + SPACES.SM}
      snapToAlignment="center"
      decelerationRate="fast"
      contentContainerStyle={styles.scrollContent}
    >
      {videos.filter(v => v.site === "YouTube").slice(0, 3).map((v) => (
        <Trailer key={v.key} videoKey={v.key} />
      ))}
    </ThemedScrollView>
  );
}

/**
 * Display a single video trailer.
 */
export function Trailer({ videoKey }: { videoKey: string }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ThemedView style={styles.trailerContainer}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoKey}
        onChangeState={onStateChange}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
  },
  trailerContainer: {
    width: CARD_WIDTH,
    marginRight: SPACES.SM,
  },
});

export default Trailers;