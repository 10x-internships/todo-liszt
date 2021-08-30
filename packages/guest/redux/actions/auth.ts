import { UPDATE_TOKENS, UPDATE_DATA } from '../constants/auth';

export const updateTokens = (payload: { accessToken: string; refreshToken: string }) => ({
  type: UPDATE_TOKENS,
  payload,
});

export const updateData = (payload: any) => ({
  type: UPDATE_DATA,
  payload,
});
