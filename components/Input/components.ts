import styled from '@emotion/styled';
import { colors } from '../../styles/theme';
import { InputProps } from './types';

const getStateColor = ({
  isError,
  isSuccess,
  defaultColor,
}: {
  isError?: boolean;
  isSuccess?: boolean;
  defaultColor?: string;
}) => {
  if (isError) return colors.primary['03'];
  if (isSuccess) return colors.primary['04'];
  return defaultColor;
};

export const InputWrapper = styled.div``;

export const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.75rem;
  color: ${colors.neutrals['05']};
`;

export const InputGroup = styled.div`
  position: relative;
  z-index: 1;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  z-index: 2;

  & svg {
    display: block;
    color: ${colors.neutrals['04']};
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 3rem;
  ${({ as }) =>
    as === 'textarea' &&
    `
      min-height: 6rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      resize: none;
  `}
  padding-right: ${({ inputIcon }) => (inputIcon ? '3rem' : '1rem')};
  padding-left: 1rem;
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  background: transparent;
  border: 2px solid
    ${({ isError, isSuccess }) =>
      getStateColor({ isError, isSuccess, defaultColor: colors.neutrals['06'] })};
  border-radius: 0.75rem;
  outline: none;
  transition: var(--transition);

  &::placeholder {
    font: inherit;
    color: ${({ isError }) => getStateColor({ isError, defaultColor: colors.neutrals['04'] })};
    transition: var(--transition);
  }

  &:hover {
    border-color: ${({ isError, isSuccess }) =>
      getStateColor({ isError, isSuccess, defaultColor: colors.neutrals['05'] })};
  }

  &:focus,
  &:active {
    border-color: ${colors.primary['01']};
  }

  &:focus::placeholder,
  &:active::placeholder {
    color: ${colors.neutrals['05']};
  }

  &:disabled {
    color: ${colors.neutrals['05']};
    background: ${colors.neutrals['06']};
    pointer-events: none;
  }
`;

export const InputMessage = styled.div<InputProps>`
  padding: 0.5rem 1rem;
  margin-top: 0.75rem;
  color: ${({ isError, isSuccess }) => getStateColor({ isError, isSuccess })};
`;
