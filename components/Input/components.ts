import styled from '@emotion/styled';
import { colors } from '../../styles/theme';
import { InputProps } from './types';

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
  padding-right: 1rem;
  padding-left: 1rem;
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  background: transparent;
  border: 2px solid
    ${({ isError, isValid }) => {
      if (isError) return colors.primary['03'];
      if (isValid) return colors.primary['04'];
      return colors.neutrals['06'];
    }};
  border-radius: 0.75rem;
  outline: none;
  transition: var(--transition);

  &::placeholder {
    font: inherit;
    color: ${({ isError }) => (isError ? colors.primary['03'] : colors.neutrals['04'])};
    transition: var(--transition);
  }

  &:hover {
    border-color: ${({ isError }) => (isError ? colors.primary['03'] : colors.neutrals['05'])};
  }

  &:focus,
  &:active {
    border-color: ${colors.primary['01']};
  }

  &:focus::placeholder,
  &:active::placeholder {
    color: ${colors.neutrals['05']};
  }
`;

export const ErrorMessage = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 0.75rem;
  color: ${colors.primary['03']};
`;
