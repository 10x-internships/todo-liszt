import { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectErrorMessage = (state: RootState) => state.auth.errorMessage;
