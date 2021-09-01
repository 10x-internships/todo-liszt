import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

export interface SignUpFormProps {
  isLoading?: boolean;
  isError?: boolean;
  error?: AxiosError;
  errorMessage?: string;
  onSubmit: SubmitHandler<IFormInput>;
}

export interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}
