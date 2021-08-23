import { combineEpics } from 'redux-observable';

import toastsEpic from './toasts';

const rootEpic = combineEpics(toastsEpic);

export default rootEpic;
