import { Observable, map } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import { SET_TIMEZONE, SET_WEEK_START } from '@redux/constants/settings';
import skipAction from '@redux/actions/skip';

const onSetWeekStart = (action$: Observable<any>) =>
  action$.pipe(
    ofType(SET_WEEK_START),
    map((action: any) => {
      localStorage.setItem('weekStart', action.payload);
      return skipAction();
    })
  );

const onSetTimezone = (action$: Observable<any>) =>
  action$.pipe(
    ofType(SET_TIMEZONE),
    map((action: any) => {
      localStorage.setItem('timezone', action.payload);
      return skipAction();
    })
  );

export default combineEpics(onSetWeekStart, onSetTimezone);
