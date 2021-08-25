export enum ButtonSizes {
  XSmall = "xs",
  Small = "sm",
  Medium = "md",
}

export enum ButtonVariants {
  Neutral = "neutral",
  Theme = "theme",
}

export enum ButtonColors {
  Primary_01,
  Primary_02,
  Primary_03,
  Primary_04,
  Secondary_01,
  Secondary_02,
  Secondary_03,
  Secondary_04,
}

type ButtonTypes = React.ComponentPropsWithRef<"button"> &
  React.ComponentPropsWithoutRef<"a">;

export interface ButtonProps extends ButtonTypes {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isDisabled?: boolean;
  href?: string;
  children: React.ReactNode;
  bgColor?: ButtonColors;
  width?: string;
}

export interface ButtonIconProps {
  position: "right" | "left";
  icon: React.ReactNode;
  iconSpaceSize?: ButtonSizes;
}
