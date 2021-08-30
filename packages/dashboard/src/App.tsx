import { Provider } from "react-redux";
import store from "./redux/store";

import { GlobalStyles } from "@todo-liszt/common";
import { ThemeDarkProvider } from "./styles";

import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <GlobalStyles />
        <Routes />
      </ThemeDarkProvider>
    </Provider>
  );
}

export default App;
