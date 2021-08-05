import styled from '@emotion/styled';
import Link from 'next/link';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import AuthLogo from '../components/AuthLogo';
import AuthTitle from '../components/AuthTitle';

import SignInForm from './SignInForm';
import AuthHaveAccount from '../components/AuthHaveAccount';

const SignIn = () => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign in</AuthTitle>
      <SignInForm />

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
