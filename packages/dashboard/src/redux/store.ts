import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk, epicMiddleware));

const preState = {
  settings: {
    language: localStorage.getItem('i18nextLng') || 'en-US',
    timezone: localStorage.getItem('timezone') || '',
    weekStart: localStorage.getItem('weekStart') || 'monday',
  },
};

const store = createStore(rootReducer, preState, composedEnhancer);
epicMiddleware.run(rootEpic as any);

export type RootState = ReturnType<typeof store.getState>;
export default store;
