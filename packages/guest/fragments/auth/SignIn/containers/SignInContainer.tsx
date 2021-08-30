import styled from '@emotion/styled';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { Text, TextVariants, TypoTags } from '@todo-liszt/common';
import todoLisztAPI from '@config/api';

import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';

import SignInForm from '../components/SignInForm';
import { ISignInInputs } from '../types';

const SignInContainer = () => {
  const dispatch = useDispatch();

  const { isLoading, isSuccess, mutate, data: signInData, error } = useMutation(
    (userInfo: { email: string; password: string; type: string }) => {
      return todoLisztAPI.post('/sessions', userInfo);
    }
  );

  const onSignInSubmit: SubmitHandler<ISignInInputs> = (data) => {
    mutate({ ...data, type: 'email' });
  };

  useEffect(() => {
    if (isSuccess) {
      const { accessToken, refreshToken } = signInData?.data.data;

      // Save tokens in cookies
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);

      window.location.replace(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}`); // Navigate to dashboard
    }
  }, [isSuccess, signInData, dispatch]);

  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign in</AuthTitle>
      <SignInForm
        onSignInSubmit={onSignInSubmit}
        isLoading={isLoading}
        error={error as AxiosError}
      />

      <Link href="/forgot-password" passHref>
        <ForgotPasswordLink>
          <Text as={TypoTags.Span} variant={TextVariants.Caption1} textCenter>
            Forgot your password?
          </Text>
        </ForgotPasswordLink>
      </Link>

      <AuthHaveAccount noAccount />
    </>
  );
};

const ForgotPasswordLink = styled.a`
  width: 100%;
  margin-top: 1rem;

  & ${Text} {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.authentication.textColor};
  }

  &:hover ${Text} {
    text-decoration: underline;
  }
`;

export default SignInContainer;
