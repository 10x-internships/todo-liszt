import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { selectToastsList } from '../../redux/selectors/toasts';
import Portal from '../Portal';
import Toast from './Toast';
import { ToastTypes } from './types';

const ToastsWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const ToastContainer = () => {
  const toastsList = useSelector(selectToastsList);

  return (
    <Portal id="toast-portal">
      <ToastsWrapper>
        {toastsList.map((toast: ToastTypes) => (
          <Toast key={toast.id} state={toast.state}>
            {toast.message}
          </Toast>
        ))}
      </ToastsWrapper>
    </Portal>
  );
};

export default ToastContainer;
