import { combineReducers } from 'redux';

import uiReducers from './ui';
import authReducer from './auth';

const rootReducer = combineReducers({ ui: uiReducers, auth: authReducer });

export default rootReducer;
