import { ThemeProvider } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';

import { GlobalStyles, lightTheme, darkTheme } from '../styles';
import DocsContainer from '../stories/DocsContainer';

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
  },
};
