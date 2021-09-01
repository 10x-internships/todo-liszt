import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';
import ForgotPasswordLink from '../../components/ForgotPasswordLink';

import SignInForm from '../components/SignInForm';
import { ISignInInputs } from '../types';

interface SignInProps {
  onSignInSubmit: SubmitHandler<ISignInInputs>;
  isLoading?: boolean;
  error: AxiosError;
}

const SignIn = ({ onSignInSubmit, isLoading, error }: SignInProps) => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign in</AuthTitle>
      <SignInForm
        onSignInSubmit={onSignInSubmit}
        isLoading={isLoading}
        error={error as AxiosError}
      />

      <ForgotPasswordLink />

      <AuthHaveAccount noAccount />
    </>
  );
};

export default SignIn;
