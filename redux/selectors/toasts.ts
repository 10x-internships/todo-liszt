import { RootStateOrAny } from 'react-redux';

export const selectToastsList = (state: RootStateOrAny) => state.toasts.list;
