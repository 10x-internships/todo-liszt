import styled from '@emotion/styled';
import { colors } from '../../styles/theme';
import { Text as CheckboxLabel } from '../Typography';

export const Checkbox = styled.span`
  width: 1.5rem;
  height: 1.5rem;
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

export const Label = styled.label<{ isDisabled?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  & input {
    width: 0.5px;
    height: 0.5px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
  }

  & input:checked + ${Checkbox} {
    background: ${colors.primary['01']};
    border-color: ${colors.primary['01']};
  }

  & input:checked + ${Checkbox} svg {
    opacity: 1;
    transform: scale(1);
  }

  & input:focus + ${Checkbox} {
    border-color: ${colors.primary['01']};
  }

  &:hover ${Checkbox} {
    border-color: ${colors.primary['01']};
  }

  & input:disabled + ${Checkbox} {
    background: ${colors.neutrals['05']};
    border-color: ${colors.neutrals['04']};
    opacity: 0.6;
    pointer-events: none;
  }

  & input:disabled + ${Checkbox} svg {
    color: ${colors.neutrals['04']};
  }

  & ${CheckboxLabel} {
    padding-left: 0.75rem;
    user-select: none;
  }

  & input:disabled ~ ${CheckboxLabel} {
    color: ${colors.neutrals['04']};
  }
`;
