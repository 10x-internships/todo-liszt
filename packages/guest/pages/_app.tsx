import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { NextPage } from 'next';
import { QueryClientProvider, QueryClient } from 'react-query';

import 'normalize.css';
import { GlobalStyles, ToastProvider, ToastContainer } from '@todo-liszt/common';

import store from '@redux/store';
import ThemeDarkProvider from '@styles/ThemeDarkProvider';

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
      <QueryClientProvider client={queryClient}>
        <ThemeDarkProvider>
          <ToastProvider>
            <GlobalStyles />
            {getLayout(<Component {...pageProps} />)}
            <ToastContainer />
          </ToastProvider>
        </ThemeDarkProvider>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
