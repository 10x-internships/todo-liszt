import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ButtonProps } from './types';
import { colors } from '../../styles';

const buttonBase = css`
  border: 2px solid transparent;
  border-radius: 5.625rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: var(--transition);

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }
`;

export const IconWrapper = styled.span<ButtonProps>`
  display: block;

  & svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }

  ${({ size = 'x-small', leftIcon, rightIcon }) => {
    switch (size) {
      case 'x-small':
        return css`
          ${leftIcon && 'margin-right: 0.5rem'}
          ${rightIcon && 'margin-left: 0.5rem'}
        `;
      case 'small':
      case 'medium':
        return css`
          ${leftIcon && 'margin-right: 0.75rem'}
          ${rightIcon && 'margin-left: 0.75rem'}
        `;
    }
  }}
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBase}

  ${({ size = 'small' }) => {
    switch (size) {
      case 'x-small':
        return css`
          padding: 0.375rem 0.625rem;
        `;
      case 'small':
        return css`
          padding: 0.625rem 0.938rem;
        `;
      case 'medium':
        return css`
          padding: 0.875rem 1.375rem;
        `;
    }
  }}
  ${({ variant, theme }) => {
    switch (variant) {
      case 'neutral':
        return css`
          color: ${colors.neutrals['08']};
          background: ${colors.primary['01']};
          border-color: ${colors.primary['01']};

          &:hover {
            background: #2955bf;
            border-color: #2955bf;
          }
        `;
      case 'theme':
        return css`
          color: ${theme.button.textColor};
          background: transparent;
          border-color: ${theme.button.borderColor};

          &:hover {
            color: ${theme.button.textHover};
            background: ${theme.button.backgroundColor};
            border-color: ${theme.button.backgroundColor};
          }

          &:disabled {
            color: ${theme.button.textHover};
            background: ${theme.button.backgroundColor};
            border-color: ${theme.button.backgroundColor};
          }
        `;
    }
  }}
`;
