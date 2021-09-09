import { RootState } from '../store';

export const selectLanguage = (state: RootState) => state.settings.language;
export const selectWeekStart = (state: RootState) => state.settings.weekStart;
