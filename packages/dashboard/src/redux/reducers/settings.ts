import { SET_LANGUAGE, SET_TIMEZONE, SET_WEEK_START } from '@redux/constants/settings';

const initialState = {
  language: '',
  timezone: '',
  weekStart: '',
};

const settingsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_WEEK_START:
      return {
        ...state,
        weekStart: action.payload,
      };
    case SET_TIMEZONE:
      return {
        ...state,
        timezone: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducers;
