import { forwardRef } from 'react';

import { Text, TextVariants, TypoTags } from '../Typography';
import { ButtonProps, ButtonSizes, ButtonVariants } from './types';
import { IconWrapper, StyledButton } from './components';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = ButtonVariants.Primary,
    size = ButtonSizes.Small,
    leftIcon,
    rightIcon,
    isDisabled,
    asLink,
    children,
    ...others
  } = props;

  const textVariant =
    size === ButtonSizes.Medium ? TextVariants.Button1 : TextVariants.Button2;

  return (
    <StyledButton
      as={asLink ? 'a' : 'button'}
      variant={variant}
      size={size}
      disabled={isDisabled}
      ref={ref}
      {...others}
    >
      {leftIcon && (
        <IconWrapper marginRight size={size}>
          {leftIcon}
        </IconWrapper>
      )}

      <Text as={TypoTags.Span} variant={textVariant}>
        {children}
      </Text>

      {rightIcon && (
        <IconWrapper marginLeft size={size}>
          {rightIcon}
        </IconWrapper>
      )}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
