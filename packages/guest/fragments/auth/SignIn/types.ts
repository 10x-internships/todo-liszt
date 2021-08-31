import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';
export interface ISignInInputs {
  email: string;
  password: string;
}

export interface SignInFormProps {
  onSignInSubmit: SubmitHandler<ISignInInputs>;
  isLoading?: boolean;
  error?: AxiosError;
}
