import { RootState } from '../store';

export const selectIsDarkMode = (state: RootState) => state.ui.isDarkMode;
export const selectIsSidebarCollapsed = (state: RootState) => state.ui.isSidebarCollapsed;
