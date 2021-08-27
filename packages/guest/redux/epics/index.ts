import { combineEpics } from 'redux-observable';

import toastsEpic from './toasts';
import authEpic from './auth';

const rootEpic = combineEpics(toastsEpic, authEpic as any);

export default rootEpic;
