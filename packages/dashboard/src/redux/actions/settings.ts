import { SET_LANGUAGE } from '@redux/constants/settings';

export const setLanguage = (lang: string) => ({ type: SET_LANGUAGE, payload: lang });
