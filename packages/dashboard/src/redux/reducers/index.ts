import { combineReducers } from "redux";

import uiReducers from "./ui";

const rootReducer = combineReducers({ ui: uiReducers });

export default rootReducer;
