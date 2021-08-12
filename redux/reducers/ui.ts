interface UIAction {
  type: string;
}

const initialState = {
  isDarkMode: false,
};

const uiReducers = (state = initialState, action: UIAction) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default uiReducers;
