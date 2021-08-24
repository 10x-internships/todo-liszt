import { combineReducers } from 'redux';

import toastsReducer from './toasts';
import uiReducers from './ui';

const rootReducer = combineReducers({ toasts: toastsReducer, ui: uiReducers });

export default rootReducer;
