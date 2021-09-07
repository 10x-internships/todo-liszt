import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';

import { useSignIn } from '@queries/hooks/auth';

import { IFormInput } from '../types';
import SignUp from '../components/SignUp';

const SignUpContainer = () => {
  const { isLoading, mutate, error } = useSignIn();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const signUpData = {
      email: data.email,
      password: data.password,
    };

    mutate(signUpData);
  };

  return <SignUp onSubmit={onSubmit} isLoading={isLoading} error={error as AxiosError} />;
};

export default SignUpContainer;
