import { TOGGLE_THEME, TOGGLE_SIDEBAR } from '../constants/ui';

interface UIAction {
  type: string;
}

const initialState = {
  isDarkMode: false,
  isSidebarCollapsed: true,
};

const uiReducers = (state = initialState, action: UIAction) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDarkMode: !state.isDarkMode };
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarCollapsed: !state.isSidebarCollapsed };
    default:
      return state;
  }
};

export default uiReducers;
