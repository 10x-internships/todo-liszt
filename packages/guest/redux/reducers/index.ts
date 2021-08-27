import { combineReducers } from 'redux';

import toastsReducer from './toasts';
import uiReducers from './ui';
import authReducer from './auth';

const rootReducer = combineReducers({ toasts: toastsReducer, ui: uiReducers, auth: authReducer });

export default rootReducer;
