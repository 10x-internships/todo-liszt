import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk, epicMiddleware));

const store = createStore(rootReducer, composedEnhancer);
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export default store;
