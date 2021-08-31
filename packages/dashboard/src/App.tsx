import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

import { GlobalStyles } from "@todo-liszt/common";
import { ThemeDarkProvider } from "./styles";

import Routes from "./routes";
import CheckAuth from "./components/CheckAuth";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <CheckAuth>
            <Routes />
          </CheckAuth>
        </QueryClientProvider>
      </ThemeDarkProvider>
    </Provider>
  );
}

export default App;
