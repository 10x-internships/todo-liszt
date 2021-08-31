import { RootState } from '../store';

export const selectUserData = (state: RootState) => state.auth.data;
export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
