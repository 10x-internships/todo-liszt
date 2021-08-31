import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { updateData } from "../../redux/actions/auth";
import todoLisztAPI from "../../config/api";
import Spinner from "../Spinner";
import { useEffect } from "react";

const accessToken = Cookies.get("accessToken");

const getUserProfile = async () => {
  const response = await todoLisztAPI.get("/users/me", {
    headers: {
      Authorization: `${accessToken}`,
    },
  });
  return response.data.data;
};

const CheckAuth: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const { isLoading } = useQuery("userProfile", getUserProfile, {
    onSuccess: (data) => dispatch(updateData(data)),
  });

  if (!accessToken) {
    window.location.replace(`${process.env.REACT_APP_LANDING_URL}/signin`);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
};

export default CheckAuth;
