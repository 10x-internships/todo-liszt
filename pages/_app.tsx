import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import 'normalize.css';
import { GlobalStyles } from 'styles';
import store from '../redux/store';
import ToastContainer from '@components/Toast';
import ThemeDarkProvider from '@styles/ThemeDarkProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeDarkProvider>
    </Provider>
  );
}
export default MyApp;
