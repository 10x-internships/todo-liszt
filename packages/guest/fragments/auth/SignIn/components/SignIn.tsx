import styled from '@emotion/styled';
import Link from 'next/link';
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
import { updateSignInData } from '@redux/actions/auth';

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

export default SignIn;
