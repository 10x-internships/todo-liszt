import { UPDATE_DATA, SIGN_OUT } from "../constants/auth";

export const updateData = (payload: any) => ({
  type: UPDATE_DATA,
  payload,
});

export const signOut = () => ({ type: SIGN_OUT });
