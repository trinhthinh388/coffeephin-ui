import { ThemeProvider } from '../src';

export const decorators = [
  (Story: Function) => <ThemeProvider>{Story()}</ThemeProvider>
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
