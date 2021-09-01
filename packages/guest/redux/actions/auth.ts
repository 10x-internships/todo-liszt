import { UPDATE_DATA, SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGN_OUT } from '../constants/auth';

export const updateData = (payload: any) => ({
  type: UPDATE_DATA,
  payload,
});

export const updateSignInData = (payload: any) => ({
  type: SIGNIN_SUCCESS,
  payload,
});

export const updateSignUpData = (payload: any) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signOut = () => ({ type: SIGN_OUT });
