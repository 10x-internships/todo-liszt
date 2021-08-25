import { Switch, Route } from "react-router-dom";

import routesConfig from "./routesConfig";

const Routes = () => {
  return (
    <Switch>
      {routesConfig.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={() => {
            const Component = route.component;
            return <Component />;
          }}
        />
      ))}
    </Switch>
  );
};

export default Routes;
