import { combineEpics } from 'redux-observable';

import settingsEpic from './settings';

const rootEpic = combineEpics(settingsEpic);

export default rootEpic;
