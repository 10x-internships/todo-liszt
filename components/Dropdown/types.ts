export type OptionType = {
  id: string | number;
  name: string;
  value?: string;
  href?: string;
  icon?: React.ReactNode;
};

export interface DropdownProps {
  options: OptionType[];
  selected: string;
  setSelected: (name: string) => void;
}
