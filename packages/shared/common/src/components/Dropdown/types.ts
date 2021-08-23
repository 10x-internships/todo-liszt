export type OptionType = {
  id: string | number;
  name: string;
  value?: string;
  href?: string;
  icon?: React.ReactNode;
  colorFill?: string;
};

export interface DropdownProps {
  options: OptionType[];
  selected: string;
  setSelected: (name: string) => void;
  placement?: "top" | "bottom";
  label?: string;
}
