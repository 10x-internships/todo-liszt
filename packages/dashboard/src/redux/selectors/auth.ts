import { RootState } from "../store";

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
export const selectUserData = (state: RootState) => state.auth.data;
