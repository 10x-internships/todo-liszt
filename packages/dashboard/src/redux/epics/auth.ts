import { map } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { clearAccessToken, clearRefreshToken } from "@services/auth";

import { SIGN_OUT } from "../constants/auth";
import skipAction from "../actions/skip";

const onSignOutSuccess = (action$: any) =>
  action$.pipe(
    ofType(SIGN_OUT),
    map(() => {
      clearAccessToken();
      clearRefreshToken();
      window.location.reload();

      return skipAction();
    })
  );

export default combineEpics(onSignOutSuccess);
