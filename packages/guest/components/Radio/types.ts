export interface RadioProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
}
