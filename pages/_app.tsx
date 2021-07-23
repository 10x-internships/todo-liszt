import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import 'normalize.css';
import { GlobalStyles, lightTheme, darkTheme } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
