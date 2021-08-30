import { UPDATE_DATA, UPDATE_TOKENS } from '../constants/auth';
import Cookies from 'js-cookie';

const parseJSON = (data: string) => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

const initialState = {
  data: parseJSON(Cookies.get('userData') as string) || null,
  accessToken: Cookies.get('accessToken') || '',
  refreshToken: Cookies.get('refreshToken') || '',
  isSignedIn: Cookies.get('accessToken') ? true : false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_TOKENS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
