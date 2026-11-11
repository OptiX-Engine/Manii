/**
 * Manii design tokens — dark mode only.
 * Accent is a single vibrant default; user-selectable accents come later.
 */
export const colors = {
  background: '#000000',
  surface: '#212121',
  text: '#fcf9fb',
  textMuted: 'rgba(252, 249, 251, 0.62)',
  accent: '#3ECFB2',
  accentSoft: 'rgba(62, 207, 178, 0.22)',
  accentGlow: 'rgba(62, 207, 178, 0.35)',
  borderSubtle: 'rgba(252, 249, 251, 0.12)',
} as const;

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;
