import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/constants/theme';

/**
 * Full-bleed dark atmosphere: layered gradients + two soft breathing orbs.
 */
export function WelcomeAtmosphere() {
  const { width, height } = useWindowDimensions();
  const primaryPulse = useSharedValue(0.72);
  const secondaryPulse = useSharedValue(0.55);
  const drift = useSharedValue(0);

  useEffect(() => {
    primaryPulse.value = withRepeat(
      withTiming(1, { duration: 5200, easing: Easing.inOut(Easing.sin) }),
      -1,
      true,
    );
    secondaryPulse.value = withDelay(
      900,
      withRepeat(
        withTiming(0.9, { duration: 6800, easing: Easing.inOut(Easing.sin) }),
        -1,
        true,
      ),
    );
    drift.value = withRepeat(
      withTiming(1, { duration: 14000, easing: Easing.inOut(Easing.quad) }),
      -1,
      true,
    );
  }, [drift, primaryPulse, secondaryPulse]);

  const primaryOrbStyle = useAnimatedStyle(() => ({
    opacity: 0.28 + primaryPulse.value * 0.22,
    transform: [
      { scale: 0.92 + primaryPulse.value * 0.14 },
      { translateY: drift.value * -18 },
    ],
  }));

  const secondaryOrbStyle = useAnimatedStyle(() => ({
    opacity: 0.16 + secondaryPulse.value * 0.18,
    transform: [
      { scale: 0.88 + secondaryPulse.value * 0.16 },
      { translateX: drift.value * 14 },
    ],
  }));

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient
        colors={[colors.background, '#0a0a0a', colors.surface]}
        locations={[0, 0.45, 1]}
        start={{ x: 0.15, y: 0 }}
        end={{ x: 0.85, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <LinearGradient
        colors={['transparent', colors.accentSoft, 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[
          styles.veil,
          {
            top: height * 0.08,
            left: width * 0.1,
            width: width * 0.8,
            height: height * 0.42,
          },
        ]}
      />

      <Animated.View
        style={[
          styles.orbPrimary,
          {
            top: height * 0.12,
            left: width * 0.18,
            width: width * 0.72,
            height: width * 0.72,
            borderRadius: width,
          },
          primaryOrbStyle,
        ]}
      />
      <Animated.View
        style={[
          styles.orbSecondary,
          {
            bottom: height * 0.18,
            right: -width * 0.18,
            width: width * 0.58,
            height: width * 0.58,
            borderRadius: width,
          },
          secondaryOrbStyle,
        ]}
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.55)']}
        locations={[0.35, 1]}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  veil: {
    position: 'absolute',
    opacity: 0.55,
  },
  orbPrimary: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.accentGlow,
  },
  orbSecondary: {
    position: 'absolute',
    backgroundColor: 'rgba(252, 249, 251, 0.08)',
  },
});
