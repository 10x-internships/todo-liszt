import { RootState } from '../store';

export const selectToastsList = (state: RootState) => state.toasts.list;
