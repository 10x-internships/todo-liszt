import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CircleButtonProps, CircleButtonSizes } from './types';
import { colors } from '../../styles';

const StyledCircleButton = styled.button<CircleButtonProps>`
  --shadow-color: 15, 15, 15;

  color: ${({ theme }) => theme.circleButton.textColor};
  background: ${({ theme }) => theme.circleButton.backgroundColor};
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0.5rem 1rem -0.5rem rgba(var(--shadow-color), 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  &:hover {
    color: ${colors.primary['01']};
    box-shadow: 0 2.5rem 2rem -1.5rem rgba(var(--shadow-color), 0.12);
  }

  ${({ size = CircleButtonSizes.Small }) => {
    switch (size) {
      case CircleButtonSizes.Small:
        return css`
          width: 3rem;
          height: 3rem;

          & svg {
            width: 1rem;
            height: 1rem;
          }

          &:hover {
            box-shadow: 0px 1.5rem 1.5rem -1rem rgba(var(--shadow-color), 0.2);
          }
        `;
      case CircleButtonSizes.Medium:
        return css`
          width: 4rem;
          height: 4rem;
        `;
      case CircleButtonSizes.Large:
        return css`
          width: 5rem;
          height: 5rem;
        `;
      default:
        return;
    }
  }}
`;

const CircleButton = ({ icon, size, asLink, ...others }: CircleButtonProps) => {
  return (
    <StyledCircleButton as={asLink ? 'a' : 'button'} size={size} {...others}>
      {icon}
    </StyledCircleButton>
  );
};

export default CircleButton;
