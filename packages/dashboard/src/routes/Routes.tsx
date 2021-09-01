import { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "@components/Layout";
import Auth from "@containers/Auth";
import { getAccessToken } from "services/auth";

import routesConfig from "./routesConfig";

const Routes = () => {
  const isAuth = getAccessToken();

  useEffect(() => {
    if (!isAuth) {
      window.location.replace(`${process.env.REACT_APP_LANDING_URL}/signin`);
    }
  }, [isAuth]);

  return (
    <>
      {isAuth && (
        <Router>
          <Auth>
            <Layout>
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
            </Layout>
          </Auth>
        </Router>
      )}
    </>
  );
};

export default Routes;
