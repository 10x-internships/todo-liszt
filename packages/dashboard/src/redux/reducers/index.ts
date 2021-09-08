import { combineReducers } from 'redux';

import uiReducers from './ui';
import settingsReducers from './settings';

const rootReducer = combineReducers({ ui: uiReducers, settings: settingsReducers });

export default rootReducer;
