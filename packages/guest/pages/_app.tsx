import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { NextPage } from 'next';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'normalize.css';
import { GlobalStyles, ToastProvider, ToastContainer } from '@todo-liszt/common';

import store from '@redux/store';
import ThemeDarkProvider from '@styles/ThemeDarkProvider';
import CheckAuth from '@components/CheckAuth';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <Provider store={store}>
      <CheckAuth>
        <QueryClientProvider client={queryClient}>
          <ThemeDarkProvider>
            <GlobalStyles />
            <ToastProvider>
              {getLayout(<Component {...pageProps} />)}
              <ToastContainer />
            </ToastProvider>
          </ThemeDarkProvider>
        </QueryClientProvider>
      </CheckAuth>
    </Provider>
  );
}
export default MyApp;
