import Portal from "../Portal";

import * as Styled from "./components";
import { useTransition } from "react-spring";

interface ModalProps {
  children?: React.ReactNode;
  onCloseModal: () => void;
  showModal?: boolean;
}

const Modal = ({ children, onCloseModal, showModal }: ModalProps) => {
  const transitions = useTransition(showModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  return transitions(
    ({ opacity, ...others }, item) =>
      item && (
        <Portal id="modal-portal">
          <Styled.ModalOverlay
            style={{
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 0.6] }),
              ...others,
            }}
            onClick={onCloseModal}
          />

          <Styled.ModalContent
            style={{
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              ...others,
            }}
          >
            {children}
          </Styled.ModalContent>
        </Portal>
      )
  );
};

export default Modal;
