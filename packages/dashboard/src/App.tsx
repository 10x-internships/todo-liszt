import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from '@todo-liszt/common';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import store from './redux/store';
import { ThemeDarkProvider } from './styles';
import Routes from './routes';
import Auth from './containers/Auth';
import './locales/i18n';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault(localStorage.getItem('timezone') || dayjs.tz.guess());

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeDarkProvider>
          <Auth>
            <GlobalStyles />
            <Routes />
          </Auth>
        </ThemeDarkProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
