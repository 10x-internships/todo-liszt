import { Text, TextVariants, TypoTags } from '../Typography';
import { ButtonProps } from './types';
import { IconWrapper, StyledButton } from './components';

const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    leftIcon,
    rightIcon,
    isDisabled,
    children,
    ...others
  } = props;

  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={isDisabled}
      {...others}
    >
      {leftIcon && (
        <IconWrapper leftIcon size={size}>
          {leftIcon}
        </IconWrapper>
      )}
      <Text
        as={TypoTags.Span}
        variant={
          size === 'medium' ? TextVariants.Button1 : TextVariants.Button2
        }
      >
        {children}
      </Text>
      {rightIcon && (
        <IconWrapper rightIcon size={size}>
          {rightIcon}
        </IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
