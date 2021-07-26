export enum CircleButtonSizes {
  // Small = 'sm',
  // Medium = 'md',
  // Large = 'lg',
  Small = '48',
  Medium = '64',
  Large = '80',
}

export interface CircleButtonProps
  extends React.ComponentPropsWithRef<'button'> {
  size?: CircleButtonSizes;
  icon?: React.ReactNode;
  asLink?: boolean;
}
