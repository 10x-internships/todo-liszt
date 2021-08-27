import { SIGN_UP } from '@redux/constants/auth';
import requestStatus from '@redux/constants/requestStatus';
import getRequestType from '@redux/helpers/getRequestType';

const initialState = {
  email: '',
  accessToken: '',
  isSignedIn: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const signUpRequest = getRequestType(SIGN_UP);

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case signUpRequest(requestStatus.REQUEST):
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: '',
      };
    case signUpRequest(requestStatus.SUCCESS):
      return {
        ...state,
        isLoading: false,
        email: action.payload.data.email,
        isError: false,
        errorMessage: '',
      };
    case signUpRequest(requestStatus.FAILURE):
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.code === 'tdl4000200' && 'This email address has been taken',
      };
    default:
      return state;
  }
};

export default authReducer;
