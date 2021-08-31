import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@todo-liszt/common";

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  border: 10px solid ${colors.neutrals["06"]};
  border-top-color: ${colors.primary["01"]};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${spin} 2s linear infinite;
`;
