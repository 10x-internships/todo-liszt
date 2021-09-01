import { combineReducers } from "redux";

import uiReducers from "./ui";
import authReducers from "./auth";

const rootReducer = combineReducers({ ui: uiReducers, auth: authReducers });

export default rootReducer;
