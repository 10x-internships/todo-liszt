import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';

import { IFormInput } from '../types';
import SignUpForm from './SignUpForm';

interface SignUpProps {
  onSubmit: SubmitHandler<IFormInput>;
  isLoading?: boolean;
  error: AxiosError;
}

const SignUp = ({ onSubmit, isLoading, error }: SignUpProps) => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign up</AuthTitle>
      <SignUpForm onSubmit={onSubmit} isLoading={isLoading} error={error as AxiosError} />
      <AuthHaveAccount />
    </>
  );
};

export default SignUp;
