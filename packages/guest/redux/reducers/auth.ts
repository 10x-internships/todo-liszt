import { UPDATE_DATA, SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGN_OUT } from '../constants/auth';

const initialState = {
  data: null,
  isSignedIn: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
        isSignedIn: Boolean(action.payload.accessToken),
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isSignedIn: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
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

export default authReducer;
