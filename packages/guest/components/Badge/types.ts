export enum BadgeColors {
  Color_01 = '01',
  Color_02 = '02',
  Color_03 = '03',
  Default = 'default',
}

export interface BadgeProps {
  icon?: React.ReactNode;
  color?: BadgeColors;
  children: React.ReactNode;
}
