import { Dispatch } from 'redux';
import { ADD_TOAST, REMOVE_TOAST } from '../constants/toasts';

export const toast = (toastData: any) => {
  return (dispatch: Dispatch) => {
    const id = new Date().getTime().toString();
    dispatch({ type: ADD_TOAST, payload: { id, ...toastData } });

    setTimeout(() => {
      dispatch({ type: REMOVE_TOAST, payload: { id } });
    }, 3000);
  };
};
