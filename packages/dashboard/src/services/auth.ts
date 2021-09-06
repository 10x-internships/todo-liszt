import Cookies from "js-cookie";

import todoLisztAPI from "../config/api";

export const setAccessToken = (accessToken: string) =>
  Cookies.set("accessToken", accessToken);
export const setRefreshToken = (refreshToken: string) =>
  Cookies.set("refreshToken", refreshToken);

export const getAccessToken = () => Cookies.get("accessToken");
export const getRefreshToken = () => Cookies.get("refreshToken");

export const clearAccessToken = () => Cookies.remove("accessToken");
export const clearRefreshToken = () => Cookies.remove("refreshToken");

export const fetchUserProfile = async () => {
  const response = await todoLisztAPI.get("/users/me");
  return response.data.data;
};
