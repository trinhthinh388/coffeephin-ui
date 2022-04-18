import ColorPalette from 'src/helpers/colors';

/**
 * Base colors enum
 */
export const enum BaseColors {
  Black = 'black',
  White = 'white',
  BlackAlpha = 'blackAlpha',
  WhiteAlpha = 'whiteAlpha',
  Gray = 'gray',
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Teal = 'teal',
  Blue = 'blue',
  Cyan = 'cyan',
  Purple = 'purple',
  Pink = 'pink'
}

/**
 * Color depth levels.
 * @description The base color will be place at the 600 level.
 * @description We use a simple algorithm to generate color tint/shade with only need to provide one base color.
 */
export type ColorDepth = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

/**
 * Colors
 */
export type AlphaColors = {
  [BaseColors.BlackAlpha]: ColorDepth;
  [BaseColors.WhiteAlpha]: ColorDepth;
  [BaseColors.Gray]: ColorDepth;
  [BaseColors.Red]: ColorDepth;
  [BaseColors.Orange]: ColorDepth;
  [BaseColors.Yellow]: ColorDepth;
  [BaseColors.Green]: ColorDepth;
  [BaseColors.Teal]: ColorDepth;
  [BaseColors.Blue]: ColorDepth;
  [BaseColors.Cyan]: ColorDepth;
  [BaseColors.Purple]: ColorDepth;
  [BaseColors.Pink]: ColorDepth;
};
export type StaticColors = {
  [BaseColors.Black]: string;
  [BaseColors.White]: string;
};
export type Colors = AlphaColors & StaticColors;
export type DefaultBaseColors = {
  [key in BaseColors]: string;
};

/**
 * Default Base Colors
 */
export const defaultBaseColors: DefaultBaseColors = {
  black: '#000000',
  white: '#ffffff',
  blackAlpha: '#0000007a',
  whiteAlpha: '#ffffff7a',
  gray: '#4b5563',
  red: '#dc2626',
  orange: '#ea580c',
  yellow: '#ca8a04',
  green: '#16a34a',
  teal: '#0d9488',
  blue: '#2563eb',
  cyan: '#0891b2',
  purple: '#9333ea',
  pink: '#db2777'
};

/**
 * Default colors
 */
export const defaultColors: Colors = {
  black: defaultBaseColors.black,
  white: defaultBaseColors.white,
  blackAlpha: new ColorPalette(defaultBaseColors.blackAlpha).getColorPalette(),
  whiteAlpha: new ColorPalette(defaultBaseColors.whiteAlpha).getColorPalette(),
  red: new ColorPalette(defaultBaseColors.red).getColorPalette(),
  gray: new ColorPalette(defaultBaseColors.gray).getColorPalette(),
  green: new ColorPalette(defaultBaseColors.green).getColorPalette(),
  teal: new ColorPalette(defaultBaseColors.teal).getColorPalette(),
  yellow: new ColorPalette(defaultBaseColors.yellow).getColorPalette(),
  orange: new ColorPalette(defaultBaseColors.orange).getColorPalette(),
  purple: new ColorPalette(defaultBaseColors.purple).getColorPalette(),
  pink: new ColorPalette(defaultBaseColors.pink).getColorPalette(),
  blue: new ColorPalette(defaultBaseColors.blue).getColorPalette(),
  cyan: new ColorPalette(defaultBaseColors.cyan).getColorPalette()
};
