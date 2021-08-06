import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import { useState } from 'react';

import 'normalize.css';
import { GlobalStyles, lightTheme, darkTheme } from 'styles';
import store from '../redux/store';
import ToastContainer from '@components/Toast';
import Switch from '@components/Switch';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
          <Switch checked={isDark} onChange={() => setIsDark(!isDark)} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
