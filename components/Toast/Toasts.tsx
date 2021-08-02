import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { selectToastsList } from '../../redux/selectors/toasts';
import Portal from '../Portal';
import ToastItem from './ToastItem';
import { ToastItemTypes } from './types';

const ToastsWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const Toasts = () => {
  const toastsList = useSelector(selectToastsList);

  return (
    <Portal id="toast-portal">
      <ToastsWrapper>
        {toastsList.map((toast: ToastItemTypes) => (
          <ToastItem key={toast.id} isSuccess={toast.isSuccess} isError={toast.isError}>
            {toast.message}
          </ToastItem>
        ))}
      </ToastsWrapper>
    </Portal>
  );
};

export default Toasts;
