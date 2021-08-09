import { RootState } from '../store';

export const selectIsDarkMode = (state: RootState) => state.ui.isDarkMode;
