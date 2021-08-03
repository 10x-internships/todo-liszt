import { combineReducers } from 'redux';

import toastsReducer from './toasts';

const rootReducer = combineReducers({ toasts: toastsReducer });

export default rootReducer;
