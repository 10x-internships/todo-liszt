import { SubmitHandler } from 'react-hook-form';

export interface SignUpFormProps {
  isLoading?: boolean;
  errorMessage?: string;
  onSubmit: SubmitHandler<IFormInput>;
}

export interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}
