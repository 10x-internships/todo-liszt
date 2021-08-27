import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { signUp } from '@redux/actions/auth';
import { selectErrorMessage, selectIsLoading } from '@redux/selectors/auth';

import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';

import SignUpForm from '../components/SignUpForm';
import { IFormInput } from '../types';

const SignUpContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const signUpData = {
      email: data.email,
      password: data.password,
    };

    dispatch(signUp(signUpData, router));
  };

  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign up</AuthTitle>
      <SignUpForm onSubmit={onSubmit} isLoading={isLoading} errorMessage={errorMessage} />
      <AuthHaveAccount />
    </>
  );
};

export default SignUpContainer;
