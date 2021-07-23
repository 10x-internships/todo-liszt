export interface ButtonProps {
  variant?: 'neutral' | 'theme';
  size?: 'x-small' | 'small' | 'medium';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  children: React.ReactNode;
}
