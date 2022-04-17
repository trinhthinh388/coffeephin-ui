export type Breakpoint = {
  [key: string]: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export const defaultBP: Breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};
