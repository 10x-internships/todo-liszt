import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "@todo-liszt/common";

import store from "./redux/store";
import { ThemeDarkProvider } from "./styles";
import Routes from "./routes";
import Auth from "./containers/Auth";

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
