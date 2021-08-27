import { Action } from 'redux';
import { combineEpics, ofType } from 'redux-observable';
import { map, Observable } from 'rxjs';

import { showToast } from '../actions/toasts';
import getRequestType from '../helpers/getRequestType';
import requestStatus from '../constants/requestStatus';
import { SIGN_UP } from '../constants/auth';

const signUpRequest = getRequestType(SIGN_UP);

const onSignUp = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(signUpRequest(requestStatus.SUCCESS)),
    map(() => showToast({ message: 'Sign up successfully', state: 'success' }))
  );

export default combineEpics(onSignUp);
