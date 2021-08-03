import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { ToastTypes } from '../../components/Toast';
import { ADD_TOAST, REMOVE_TOAST } from '../constants/toasts';

export const showToast = (toastData: ToastTypes) => {
  return (dispatch: Dispatch) => {
    const id = uuidv4();
    dispatch({ type: ADD_TOAST, payload: { id, ...toastData } });

    setTimeout(() => {
      dispatch({ type: REMOVE_TOAST, payload: { id } });
    }, 3000);
  };
};
