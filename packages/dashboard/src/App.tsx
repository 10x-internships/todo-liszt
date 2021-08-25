import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { GlobalStyles } from "@todo-liszt/common";
import { ThemeDarkProvider } from "./styles";

import Layout from "./components/Layout";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeDarkProvider>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </ThemeDarkProvider>
    </Provider>
  );
}

export default App;
