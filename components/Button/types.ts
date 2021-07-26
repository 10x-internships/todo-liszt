export enum ButtonSizes {
  XSmall = 'x-small',
  Small = 'sm',
  Medium = 'medium',
}

export enum ButtonVariants {
  Primary = 'primary',
  Theme = 'theme',
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariants;
  size?: ButtonSizes;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  children: React.ReactNode;
  asLink?: boolean;
}

export interface IconWrapperProps {
  size: ButtonSizes;
  marginRight?: boolean;
  marginLeft?: boolean;
}
