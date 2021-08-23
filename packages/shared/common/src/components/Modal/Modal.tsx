import Portal from "../Portal";

import * as Styled from "./components";

interface ModalProps {
  children?: React.ReactNode;
  onCloseModal: () => void;
}

const Modal = ({ children, onCloseModal }: ModalProps) => {
  return (
    <Portal id="modal-portal">
      <Styled.ModalOverlay onClick={onCloseModal} />
      <Styled.ModalContent>{children}</Styled.ModalContent>
    </Portal>
  );
};

export default Modal;
