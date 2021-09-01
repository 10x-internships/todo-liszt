import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "@todo-liszt/common";

import store from "./redux/store";
import { ThemeDarkProvider } from "./styles";
import Routes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Routes />
        </QueryClientProvider>
      </ThemeDarkProvider>
    </Provider>
  );
}

export default App;
