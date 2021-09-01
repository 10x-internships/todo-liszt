import Cookies from "js-cookie";

import todoLisztAPI from "../config/api";

export const getAccessToken = () => Cookies.get("accessToken");
export const getRefreshToken = () => Cookies.get("refreshToken");

export const removeAccessToken = () => Cookies.remove("accessToken");
export const removeRefreshToken = () => Cookies.remove("refreshToken");

export const fetchUserProfile = async () => {
  const response = await todoLisztAPI.get("/users/me", {
    headers: {
      Authorization: `${getAccessToken()}`,
    },
  });
  return response.data.data;
};
