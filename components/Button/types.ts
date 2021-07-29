export enum ButtonSizes {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
}

export enum ButtonVariants {
  Neutral = 'neutral',
  Theme = 'theme',
}

type ButtonTypes = React.ComponentPropsWithRef<'button'> & React.ComponentPropsWithoutRef<'a'>;

export interface ButtonProps extends ButtonTypes {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isDisabled?: boolean;
  href?: string;
  children: React.ReactNode;
}

export interface ButtonIconProps {
  position: 'right' | 'left';
  icon: React.ReactNode;
  iconSpaceSize?: ButtonSizes;
}
