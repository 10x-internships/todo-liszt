import { SET_LANGUAGE, SET_WEEK_START } from '@redux/constants/settings';

export const setLanguage = (lang: string) => ({ type: SET_LANGUAGE, payload: lang });
export const setWeekStart = (day: string) => ({ type: SET_WEEK_START, payload: day });
