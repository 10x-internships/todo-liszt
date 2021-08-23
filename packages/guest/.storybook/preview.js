import { ThemeProvider } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ToastContainer from '../components/Toast';
import { GlobalStyles, lightTheme, darkTheme } from '../styles';
import DocsContainer from '../stories/DocsContainer';

export const decorators = [
  (Story) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Story />
          <ToastContainer />
        </ThemeProvider>
      </Provider>
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
  layout: 'fullscreen',
};
