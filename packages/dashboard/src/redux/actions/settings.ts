import { SET_LANGUAGE, SET_WEEK_START, SET_TIMEZONE } from '@redux/constants/settings';

export const setLanguage = (lang: string) => ({ type: SET_LANGUAGE, payload: lang });
export const setWeekStart = (day: string) => ({ type: SET_WEEK_START, payload: day });
export const setTimezone = (timezone: string) => ({ type: SET_TIMEZONE, payload: timezone });
