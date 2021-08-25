import { Action } from 'redux';
import { delay, map, Observable } from 'rxjs';
import { combineEpics, ofType, StateObservable } from 'redux-observable';

import { RootState } from '../store';
import { ADD_TOAST } from '../constants/toasts';
import { removeToast } from '../actions/toasts';

const onAddToast = (action$: Observable<Action>, state$: StateObservable<RootState>) =>
  action$.pipe(
    ofType(ADD_TOAST),
    delay(3000),
    map(() => removeToast(state$.value.toasts.list[0].id as string))
  );

export default combineEpics(onAddToast);
