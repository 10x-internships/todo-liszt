import { combineEpics } from "redux-observable";

import authEpic from "./auth";

const rootEpic = combineEpics(authEpic);

export default rootEpic;
