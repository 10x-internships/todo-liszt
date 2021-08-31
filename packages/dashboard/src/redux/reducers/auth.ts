import { UPDATE_DATA, SIGN_OUT } from "../constants/auth";

const initialState = {
  data: null,
  isSignedIn: false,
};

const authReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
        isSignedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        data: null,
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default authReducers;
