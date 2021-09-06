import { Suspense } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import Layout from "@components/Layout";
import Spinner from "@components/Spinner";

import routesConfig from "./routesConfig";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <Switch>
            {routesConfig.map((route, idx) => (
              <ProtectedRoute key={idx} {...route} />
            ))}
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default Routes;

/*
const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<Loading />}>
      <Switch>
        {publicRoutes.map((route, index) => (
          <PublicRoute key={index} exact {...route} />
        ))}
        {protectedRoutes.map((route, index) => (
          <ProtectedRoute key={index} exact {...route} />
        ))}
      </Switch>
    </Suspense>
  </Router>
);
*/
