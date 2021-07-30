export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  isError?: boolean;
  isSuccess?: boolean;
  message?: string;
  inputIcon?: React.ReactNode;
}
