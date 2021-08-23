export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  isError?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
  message?: string;
  inputIcon?: React.ReactNode;
  as?: string;
}
