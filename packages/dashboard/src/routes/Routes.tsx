import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import { selectIsSignedIn } from "../redux/selectors/auth";

import routesConfig from "./routesConfig";
import { useEffect } from "react";

const Routes = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  useEffect(() => {
    if (!isSignedIn)
      window.location.replace(`${process.env.REACT_APP_LANDING_URL}/signin`);
  }, [isSignedIn]);

  return (
    <>
      {isSignedIn && (
        <Router>
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
        </Router>
      )}
    </>
  );
};

export default Routes;
