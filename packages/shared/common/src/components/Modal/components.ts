import { animated } from "react-spring";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const ModalOverlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.neutrals["02"]};
  opacity: 0.6;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 40rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.modal.backgroundColor};
  border-radius: 4px;
  z-index: 100;
  transform: translate(-50%, -50%);
`;
