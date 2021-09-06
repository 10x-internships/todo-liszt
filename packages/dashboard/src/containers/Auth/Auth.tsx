import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import * as auth from "@services/auth";
import { updateUserData } from "@redux/actions/auth";

import CheckAuth from "./components/CheckAuth";

const Auth: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const accessToken = auth.getAccessToken();

  const { isLoading } = useQuery("userProfile", auth.fetchUserProfile, {
    enabled: !!accessToken,
    onSuccess: (userProfile) => dispatch(updateUserData(userProfile)),
  });

  return <CheckAuth isLoading={isLoading}>{children}</CheckAuth>;
};

export default Auth;
