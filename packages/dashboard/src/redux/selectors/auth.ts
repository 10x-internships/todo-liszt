import { RootState } from "../store";

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
