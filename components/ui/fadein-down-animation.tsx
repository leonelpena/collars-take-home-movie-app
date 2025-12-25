import { ReactNode } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

/**
 * Fade in down animation.
 * Expected use in rendering item list.
 *
 * @param mutiplierDelay Allows to increse the animation delay by X factor
 */
export function FadeInDownAnimation({
  mutiplierDelay = 1,
  children,
}: {
  mutiplierDelay: number,
  children: ReactNode,
}) {
  return (
    <Animated.View 
      entering={FadeInDown.delay(mutiplierDelay * 100).duration(500)}
    >
      {children}
    </Animated.View>
  );
};
