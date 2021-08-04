import { v4 as uuidv4 } from 'uuid';

import { ToastTypes } from '../../components/Toast';
import { ADD_TOAST, REMOVE_TOAST } from '../constants/toasts';

export const showToast = (toastData: ToastTypes) => ({
  type: ADD_TOAST,
  payload: { id: uuidv4(), ...toastData },
});

export const removeToast = (id: string) => ({ type: REMOVE_TOAST, payload: id });
