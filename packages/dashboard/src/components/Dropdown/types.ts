export type OptionType = {
  id: string | number;
  name: string;
  value?: string;
  href?: string;
  icon?: any;
  colorFill?: string;
};

export interface DropdownProps {
  options: OptionType[];
  selected: string;
  setSelected: (name: string) => void;
  placement?: "top" | "bottom";
  label?: string;
  children?: React.ReactNode;
}

export interface DropdownListProps extends React.ComponentPropsWithRef<"ul"> {
  children?: React.ReactNode;
  onCloseDropdown: (e: Event) => void;
}

export interface DropdownItemProps
  extends React.ComponentPropsWithoutRef<"li"> {
  isAllItem?: boolean;
  option: OptionType;
}
