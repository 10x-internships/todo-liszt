import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import 'normalize.css';
import { GlobalStyles, lightTheme, darkTheme } from 'styles';
import store from '../redux/store';
import ToastContainer from '@components/Toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
