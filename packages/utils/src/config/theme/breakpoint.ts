export type Breakpoint = {
  [key: string]: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export const defaultBP: Breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};
