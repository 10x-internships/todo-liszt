import { SET_LANGUAGE } from '@redux/constants/settings';

const initialState = {
  language: '',
  timezone: '',
  weekStart: 'monday',
};

const settingsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducers;
