import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  ButtonProps,
  IconWrapperProps,
  ButtonSizes,
  ButtonVariants,
} from './types';
import { colors } from '../../styles';

const buttonBase = css`
  border: none;
  border-radius: 5.625rem;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const IconWrapper = styled.span<IconWrapperProps>`
  --icon-spacing-normal: 0.75rem;
  --icon-spacing-small: 0.5rem;

  display: block;

  ${({ size, marginRight }) =>
    marginRight &&
    `margin-right: var(--icon-spacing-${
      size === ButtonSizes.XSmall ? 'small' : 'normal'
    });`}

  ${({ size, marginLeft }) =>
    marginLeft &&
    `margin-left: var(--icon-spacing-${
      size === ButtonSizes.XSmall ? 'small' : 'normal'
    });`}

  & svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBase}

  ${({ size }) => {
    switch (size) {
      case ButtonSizes.XSmall:
        return css`
          height: 2rem;
          padding: 0 0.75rem;
        `;
      case ButtonSizes.Small:
        return css`
          height: 2.5rem;
          padding: 0 1rem;
        `;
      case ButtonSizes.Medium:
        return css`
          height: 3rem;
          padding: 0 1.5rem;
        `;
      default:
        return;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case ButtonVariants.Neutral:
        return css`
          color: ${colors.neutrals['08']};
          background: ${colors.primary['01']};

          &:hover {
            background: #2955bf;
          }
        `;
      case ButtonVariants.Theme:
        return css`
          color: ${theme.button.textColor};
          background: transparent;
          border: 2px solid ${theme.button.borderColor};

          &:hover {
            color: ${theme.button.textHover};
            background: ${theme.button.backgroundColor};
            border-color: ${theme.button.backgroundColor};
          }

          &[disabled] {
            color: ${theme.button.textHover};
            background: ${theme.button.backgroundColor};
            border-color: ${theme.button.backgroundColor};
          }
        `;
    }
  }}
`;
