export enum ButtonSizes {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
}

export enum ButtonVariants {
  Neutral = 'neutral',
  Theme = 'theme',
}

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  href?: string;
  children: React.ReactNode;
}

export interface ButtonIconProps {
  position: 'right' | 'left';
  icon: React.ReactNode;
  iconSpaceSize?: ButtonSizes;
}
