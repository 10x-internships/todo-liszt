import { map } from 'rxjs';
import Cookies from 'js-cookie';
import { ofType, combineEpics } from 'redux-observable';

import { SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGN_OUT } from '../constants/auth';
import skipAction from '../actions/skip';

const onSignUpSuccess = (action$: any) =>
  action$.pipe(
    ofType(SIGNUP_SUCCESS),
    map((action: any) => {
      const userData = action.payload;
      Cookies.set('userData', JSON.stringify(userData));

      return skipAction();
    })
  );

const onSignInSuccess = (action$: any) =>
  action$.pipe(
    ofType(SIGNIN_SUCCESS),
    map((action: any) => {
      const userData = action.payload;
      Cookies.set('userData', JSON.stringify(userData));
      Cookies.set('accessToken', userData.accessToken);
      Cookies.set('refreshToken', userData.refreshToken);

      return skipAction();
    })
  );

const onSignOutSuccess = (action$: any) =>
  action$.pipe(
    ofType(SIGN_OUT),
    map(() => {
      Cookies.remove('userData');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');

      return skipAction();
    })
  );

export default combineEpics(onSignUpSuccess, onSignInSuccess, onSignOutSuccess);
