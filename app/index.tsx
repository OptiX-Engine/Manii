import { useEffect } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WelcomeAtmosphere } from '@/components/WelcomeAtmosphere';
import { colors, spacing } from '@/constants/theme';

export default function WelcomeScreen() {
  const brandOpacity = useSharedValue(0);
  const brandTranslate = useSharedValue(18);
  const copyOpacity = useSharedValue(0);
  const copyTranslate = useSharedValue(14);
  const ctaOpacity = useSharedValue(0);
  const ctaTranslate = useSharedValue(12);
  const accentWidth = useSharedValue(0);

  useEffect(() => {
    brandOpacity.value = withTiming(1, { duration: 700, easing: Easing.out(Easing.cubic) });
    brandTranslate.value = withTiming(0, { duration: 700, easing: Easing.out(Easing.cubic) });

    accentWidth.value = withDelay(
      320,
      withTiming(56, { duration: 650, easing: Easing.out(Easing.cubic) }),
    );

    copyOpacity.value = withDelay(
      220,
      withTiming(1, { duration: 650, easing: Easing.out(Easing.cubic) }),
    );
    copyTranslate.value = withDelay(
      220,
      withTiming(0, { duration: 650, easing: Easing.out(Easing.cubic) }),
    );

    ctaOpacity.value = withDelay(
      480,
      withTiming(1, { duration: 650, easing: Easing.out(Easing.cubic) }),
    );
    ctaTranslate.value = withDelay(
      480,
      withTiming(0, { duration: 650, easing: Easing.out(Easing.cubic) }),
    );
  }, [
    accentWidth,
    brandOpacity,
    brandTranslate,
    copyOpacity,
    copyTranslate,
    ctaOpacity,
    ctaTranslate,
  ]);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: brandOpacity.value,
    transform: [{ translateY: brandTranslate.value }],
  }));

  const copyStyle = useAnimatedStyle(() => ({
    opacity: copyOpacity.value,
    transform: [{ translateY: copyTranslate.value }],
  }));

  const ctaStyle = useAnimatedStyle(() => ({
    opacity: ctaOpacity.value,
    transform: [{ translateY: ctaTranslate.value }],
  }));

  const accentStyle = useAnimatedStyle(() => ({
    width: accentWidth.value,
  }));

  const onGetStarted = () => {
    Alert.alert('Coming soon', 'Get started will open onboarding in a later release.');
  };

  const onSignIn = () => {
    Alert.alert('Coming soon', 'Sign in will connect to your Manii account later.');
  };

  return (
    <View style={styles.root}>
      <WelcomeAtmosphere />
      <SafeAreaView style={styles.safe}>
        <View style={styles.hero}>
          <Animated.View style={[styles.brandBlock, brandStyle]}>
            <Text accessibilityRole="header" style={styles.brand}>
              Manii
            </Text>
            <Animated.View style={[styles.accentMark, accentStyle]} />
          </Animated.View>

          <Animated.Text style={[styles.support, copyStyle]}>
            Your calm companion for embodying the life you intend.
          </Animated.Text>
        </View>

        <Animated.View style={[styles.ctaGroup, ctaStyle]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Get started"
            onPress={onGetStarted}
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
          >
            <Text style={styles.primaryLabel}>Get started</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Sign in"
            onPress={onSignIn}
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
          >
            <Text style={styles.secondaryLabel}>Sign in</Text>
          </Pressable>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safe: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: spacing.xxl,
    gap: spacing.lg,
  },
  brandBlock: {
    gap: spacing.sm,
  },
  brand: {
    color: colors.text,
    fontSize: 64,
    fontWeight: '700',
    letterSpacing: -1.4,
    // SF Pro on iOS; system UI font elsewhere — no Inter/Roboto/Arial stacks.
    fontFamily: undefined,
  },
  accentMark: {
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.accent,
  },
  support: {
    color: colors.textMuted,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '400',
    maxWidth: 320,
  },
  ctaGroup: {
    gap: spacing.sm,
    paddingBottom: spacing.lg,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    paddingHorizontal: spacing.lg,
    borderRadius: 14,
    alignItems: 'center',
  },
  primaryLabel: {
    color: colors.background,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  secondaryButton: {
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  secondaryLabel: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.1,
  },
  pressed: {
    opacity: 0.82,
  },
});
