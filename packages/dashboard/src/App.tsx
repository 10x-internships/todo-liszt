import { Switch, Route, Redirect } from "react-router-dom";

import { GlobalStyles } from "@todo-liszt/common";
import { ThemeDarkProvider } from "./styles";

import Layout from "./components/Layout";
import { CreateList, List, UpdateList } from "./pages/List";
import CalendarPage from "./pages/Calendar";
import SettingsPage from "./pages/Settings";

function App() {
  return (
    <ThemeDarkProvider>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route path="/app/list/create">
            <CreateList />
          </Route>
          <Route path="/app/list/:id">
            <UpdateList />
          </Route>
          <Route path="/app/list">
            <List />
          </Route>
          <Route path="/app/settings">
            <SettingsPage />
          </Route>
          <Route path="/app/calendar">
            <CalendarPage />
          </Route>
          <Route path="/app">
            <Redirect to="/app/list" />
          </Route>
          <Route path="/" exact>
            <Redirect to="/app/list" />
          </Route>
        </Switch>
      </Layout>
    </ThemeDarkProvider>
  );
}

export default App;
