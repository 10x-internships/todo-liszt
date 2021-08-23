import { ToastTypes } from '../../components/Toast';
import { ADD_TOAST, REMOVE_TOAST } from '../constants/toasts';

type ToastsStateTypes = {
  list: ToastTypes[];
};

type ToastsAction = {
  type: string;
  payload: ToastTypes | string;
};

const initialState: ToastsStateTypes = {
  list: [],
};

const toastsReducer = (state = initialState, action: ToastsAction): ToastsStateTypes => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        list: [...state.list, action.payload as ToastTypes],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== (action.payload as string)),
      };
    default:
      return state;
  }
};

export default toastsReducer;
