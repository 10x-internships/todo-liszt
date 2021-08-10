import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

import 'normalize.css';
import { GlobalStyles } from 'styles';
import store from '../redux/store';
import ToastContainer from '@components/Toast';
import ThemeDarkProvider from '@styles/ThemeDarkProvider';

import { DashboardLayout, AuthLayout, GuestLayout } from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  let Layout = <Component {...pageProps} />;

  if (router.pathname.startsWith('/app')) {
    Layout = (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }

  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <GlobalStyles />
        {Layout}
        {/* <Component {...pageProps} /> */}
        <ToastContainer />
      </ThemeDarkProvider>
    </Provider>
  );
}
export default MyApp;
