import { useSelector } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "../components/Layout";
import { selectIsSignedIn } from "../redux/selectors/auth";

import routesConfig from "./routesConfig";

const Routes = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  if (!isSignedIn) {
    window.location.replace(`${process.env.REACT_APP_LANDING_URL}/signin`);
  }

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
