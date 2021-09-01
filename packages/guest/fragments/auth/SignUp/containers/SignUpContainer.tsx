import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';

import todoLisztAPI from '@config/api';
import { updateSignUpData } from '@redux/actions/auth';

import { IFormInput } from '../types';
import SignUp from '../components/SignUp';

const SignUpContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, mutate, error } = useMutation(
    (newUser: { email: string; password: string }) => {
      return todoLisztAPI.post('/users', newUser);
    }
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const signUpData = {
      email: data.email,
      password: data.password,
    };

    mutate(signUpData, {
      onSuccess: (signUpData) => {
        dispatch(updateSignUpData(signUpData?.data.data));
        router.push('/signin');
      },
    });
  };

  return <SignUp onSubmit={onSubmit} isLoading={isLoading} error={error as AxiosError} />;
};

export default SignUpContainer;
