import React, { forwardRef } from 'react';

import { ButtonProps, ButtonSizes, ButtonVariants } from './types';
import { StyledButton } from './components';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = ButtonVariants.Neutral,
    size = ButtonSizes.Small,
    isDisabled,
    href,
    children,
    ...others
  } = props;

  return (
    <StyledButton
      as={href ? 'a' : 'button'}
      href={href}
      variant={variant}
      size={size}
      disabled={isDisabled}
      ref={ref}
      {...others}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
