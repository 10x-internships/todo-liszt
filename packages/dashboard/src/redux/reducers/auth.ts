import Cookies from "js-cookie";

const initialState = {
  data: JSON.parse(Cookies.get("userData") as string) || null,
  accessToken: Cookies.get("accessToken") || "",
  refreshToken: Cookies.get("refreshToken") || "",
  isSignedIn: Cookies.get("accessToken") ? true : false,
};

const authReducers = (state = initialState, action: any) => {
  return state;
};

export default authReducers;
