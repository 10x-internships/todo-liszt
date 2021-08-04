import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';

import { selectToastsList } from '../../redux/selectors/toasts';
import Portal from '../Portal';
import Toast from './Toast';
import { ToastTypes } from './types';

const ToastsWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 0.5rem;
  z-index: 20;
`;

const ToastContainer = () => {
  const toastsList = useSelector(selectToastsList);
  const transitions = useTransition(toastsList, {
    from: { opacity: 0, x: 200 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 200 },
  });

  return (
    <Portal id="toast-portal">
      <ToastsWrapper>
        {transitions((styles: any, toast: ToastTypes) => (
          <Toast key={toast.id} style={styles} {...toast} />
        ))}
      </ToastsWrapper>
    </Portal>
  );
};

export default ToastContainer;
