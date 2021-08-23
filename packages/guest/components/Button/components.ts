import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ButtonProps, ButtonIconProps, ButtonSizes, ButtonVariants, ButtonColors } from './types';
import { colors } from '../../styles';

const buttonBase = css`
  font-weight: 700;
  line-height: 1rem;
  border: 0;
  border-radius: 5.625rem;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }
`;

const getButtonColor = (color: ButtonColors) => {
  switch (color) {
    case ButtonColors.Primary_01:
      return colors.primary['01'];
    case ButtonColors.Primary_02:
      return colors.primary['02'];
    case ButtonColors.Primary_03:
      return colors.primary['03'];
    case ButtonColors.Primary_04:
      return colors.primary['04'];
    case ButtonColors.Secondary_01:
      return colors.secondary['01'];
    case ButtonColors.Secondary_02:
      return colors.secondary['02'];
    case ButtonColors.Secondary_03:
      return colors.secondary['03'];
    case ButtonColors.Secondary_04:
      return colors.secondary['04'];
    default:
      return colors.primary['01'];
  }
};

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBase}

  ${({ size }) => {
    switch (size) {
      case ButtonSizes.XSmall:
        return css`
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.875rem;
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

  ${({ variant, theme, bgColor = ButtonColors.Primary_01 }) => {
    switch (variant) {
      case ButtonVariants.Neutral:
        return css`
          position: relative;
          color: ${colors.neutrals['08']};
          background: ${getButtonColor(bgColor)};
          z-index: 1;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.25);
            border-radius: inherit;
            opacity: 0;
            visibility: hidden;
            z-index: -1;
            transition: var(--transition);
          }

          &:hover::before,
          &[disabled]::before {
            opacity: 1;
            visibility: visible;
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

export const StyledButtonIcon = styled.span<ButtonIconProps>`
  display: block;

  ${({ iconSpaceSize = ButtonSizes.Small, position }) =>
    css`
      margin-${position === 'left' ? 'right' : 'left'}: ${
      iconSpaceSize === ButtonSizes.XSmall ? '0.5rem' : '0.75rem'
    };
    `}

  & svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }
`;
