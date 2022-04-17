import { Colors, defaultColors } from './colors';
import { Breakpoint, defaultBP } from './breakpoint';
import { Spacing, defaultSpacing } from './spacing';

export type Theme = {
  colors: Colors;
  breakpoint: Breakpoint;
  spacing: Spacing;
};

export const defaultTheme: Theme = {
  colors: defaultColors,
  breakpoint: defaultBP,
  spacing: defaultSpacing
};
