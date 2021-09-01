import { map } from "rxjs";
import Cookies from "js-cookie";
import { ofType, combineEpics } from "redux-observable";

import { SIGN_OUT } from "../constants/auth";
import skipAction from "../actions/skip";

const onSignOutSuccess = (action$: any) =>
  action$.pipe(
    ofType(SIGN_OUT),
    map(() => {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      window.location.reload();

      return skipAction();
    })
  );

export default combineEpics(onSignOutSuccess);
