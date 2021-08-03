import { ToastTypes } from '../../components/Toast';
import { ADD_TOAST, REMOVE_TOAST } from '../constants/toasts';

type ToastsStateTypes = {
  list: ToastTypes[];
};

type ToastsAction = {
  type: string;
  payload: ToastTypes;
};

const initialState: ToastsStateTypes = {
  list: [],
};

const toastsReducer = (state = initialState, action: ToastsAction): ToastsStateTypes => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default toastsReducer;
