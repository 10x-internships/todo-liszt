import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

export const Checkbox = styled.span`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s linear;

  & svg {
    width: 100%;
    height: 100%;
    color: ${colors.neutrals['08']};
    display: block;
    opacity: 0;
    transform: scale(0);
    transition: all 0.15s linear;
  }
`;

export const Label = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & input {
    display: none;
  }

  & input:checked + ${Checkbox} {
    background: ${colors.primary['01']};
    border-color: ${colors.primary['01']};
  }

  & input:checked + ${Checkbox} svg {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Text = styled.span`
  padding-left: 0.75rem;
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  display: inline-block;
  user-select: none;
`;
