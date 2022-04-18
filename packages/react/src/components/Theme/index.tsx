import React, { createContext, useEffect } from 'react';
import {
  Theme,
  defaultTheme,
  isBrowser,
  genColorCSSVars
} from '@coffeephin/utils';
import { cloneDeep, map, kebabCase } from 'lodash';

export type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};
export type TThemeContext = {
  theme?: Theme;
};

const ThemeContext = createContext<TThemeContext>({
  theme: defaultTheme
});

export default function ThemeProvider({
  theme = defaultTheme,
  children
}: ThemeProviderProps) {
  useEffect(() => {
    if (!isBrowser()) return;
    genColorCSSVars(theme.colors);
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{ theme: { ...cloneDeep(defaultTheme), ...cloneDeep(theme) } }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}
