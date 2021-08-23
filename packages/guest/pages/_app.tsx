import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { NextPage } from 'next';

import 'normalize.css';
import { GlobalStyles } from '@todo-liszt/common';

import store from '../redux/store';
import ToastContainer from '@components/Toast';
import ThemeDarkProvider from '@styles/ThemeDarkProvider';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </ThemeDarkProvider>
    </Provider>
  );
}
export default MyApp;
