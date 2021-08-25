interface UIAction {
  type: string;
}

const initialState = {
  isDarkMode: false,
};

const uiReducers = (state = initialState, action: UIAction) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default uiReducers;
