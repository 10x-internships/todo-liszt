export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  defaultChecked?: boolean;
}
