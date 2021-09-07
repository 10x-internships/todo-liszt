import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import { useSignIn } from '@queries/hooks/auth';

import SignIn from '../components/SignIn';
import { ISignInInputs } from '../types';

const SignInContainer = () => {
  const { isLoading, mutate, error } = useSignIn();

  const onSignInSubmit: SubmitHandler<ISignInInputs> = (data) => {
    const signInData = {
      ...data,
      type: 'email',
    };
    mutate(signInData);
  };

  return (
    <SignIn onSignInSubmit={onSignInSubmit} isLoading={isLoading} error={error as AxiosError} />
  );
};

export default SignInContainer;
