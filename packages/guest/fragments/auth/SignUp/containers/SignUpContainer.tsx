import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';

import { useToast } from '@todo-liszt/common';
import todoLisztAPI from '@config/api';

import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';

import { IFormInput } from '../types';
import SignUpForm from '../components/SignUpForm';
import { updateData } from '@redux/actions/auth';
import Cookies from 'js-cookie';

const SignUpContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const { isLoading, isSuccess, mutate, data: signUpData, error } = useMutation(
    (newUser: { email: string; password: string }) => {
      return todoLisztAPI.post('/users', newUser);
    }
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const signUpData = {
      email: data.email,
      password: data.password,
    };

    mutate(signUpData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast?.addToast({ message: 'Sign up successfully', state: 'success' });
      dispatch(updateData(signUpData?.data.data));
      Cookies.set('userData', JSON.stringify(signUpData?.data.data));
      router.push('/signin');
    }
    // eslint-disable-next-line
  }, [isSuccess, router]);

  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign up</AuthTitle>
      <SignUpForm onSubmit={onSubmit} isLoading={isLoading} error={error as AxiosError} />
      <AuthHaveAccount />
    </>
  );
};

export default SignUpContainer;
