import styled from "@emotion/styled";
import { colors } from "../../styles";
import { Text as RadioLabel } from "../Typography";

export const Radio = styled.span`
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${({ theme }) => theme.backgroundColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 50%;
  transition: all 0.15s linear;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    width: 0.75rem;
    height: 0.75rem;
    background: ${colors.primary["01"]};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.15s linear;
  }

  &:hover {
    border-color: ${colors.primary["01"]};
  }
`;

export const Label = styled.label<{ isDisabled?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  & input:checked + ${Radio}::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  & input:focus + ${Radio} {
    border-color: ${colors.primary["01"]};
  }

  & input:disabled + ${Radio} {
    opacity: 0.6;
    background: ${colors.neutrals["05"]};
    border-color: ${colors.neutrals["04"]};
  }

  & input:disabled + ${Radio}::after {
    background: ${colors.neutrals["04"]};
  }

  & ${RadioLabel} {
    padding-left: 0.75rem;
    user-select: none;
  }

  & input:disabled ~ ${RadioLabel} {
    color: ${colors.neutrals["04"]};
  }
`;
