import { Route, RouteProps } from "react-router-dom";
import { getAccessToken } from "@services/auth";

interface ProtectedRouteProps extends RouteProps {
  component: any;
}

const ProtectedRoute = ({
  component: Component,
  ...others
}: ProtectedRouteProps) => {
  const isSignedIn = getAccessToken();

  // if (!isSignedIn) {
  //   window.location.replace(`${process.env.REACT_APP_LANDING_URL}/signin`);
  //   return <></>;
  // }

  return <Route {...others} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
