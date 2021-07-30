export type OptionType = {
  id: string | number;
  name: string;
  value: string;
};

export interface DropdownProps {
  options: OptionType[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
