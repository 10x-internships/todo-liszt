import { Switch, Route, Redirect } from "react-router-dom";

import { GlobalStyles } from "@todo-liszt/common";
import { ThemeDarkProvider } from "./styles";

import Layout from "./components/Layout";
import { CreateList, List } from "./pages/List";

function App() {
  return (
    <ThemeDarkProvider>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route path="/app/list/create">
            <CreateList />
          </Route>
          <Route path="/app/list">
            <List />
          </Route>
          <Route path="/app/settings">
            <h1>Settings</h1>
          </Route>
          <Route path="/app/calendar">
            <h1>Calendar</h1>
          </Route>
          <Route path="/app">
            <h1>List</h1>
          </Route>
          <Route path="/" exact>
            <Redirect to="/app" />
          </Route>
        </Switch>
      </Layout>
    </ThemeDarkProvider>
  );
}

export default App;
