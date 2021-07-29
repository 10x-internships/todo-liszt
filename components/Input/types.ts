export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  isError?: boolean;
  isValid?: boolean;
  errorMessage?: string;
}
