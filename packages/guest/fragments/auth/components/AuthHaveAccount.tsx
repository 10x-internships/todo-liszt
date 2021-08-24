import Link from 'next/link';
import styled from '@emotion/styled';

import { colors, Text, TextVariants, TypoTags } from '@todo-liszt/common';

interface AuthHaveAccountProps {
  noAccount?: boolean;
}

const AuthHaveAccount = ({ noAccount }: AuthHaveAccountProps) => {
  return (
    <StyledAuthHaveAccount>
      {!noAccount && (
        <Text as={TypoTags.P} variant={TextVariants.Caption1} textCenter>
          Have an account?{' '}
          <Link href="/signin" passHref>
            <SignUpLink>Sign in Now</SignUpLink>
          </Link>
        </Text>
      )}

      {noAccount && (
        <Text as={TypoTags.P} variant={TextVariants.Caption1} textCenter>
          {/* eslint-disable */}
          Don't have account?{' '}
          <Link href="/signup" passHref>
            <SignUpLink>Sign Up Now</SignUpLink>
          </Link>
        </Text>
      )}
    </StyledAuthHaveAccount>
  );
};

const StyledAuthHaveAccount = styled.div`
  margin-top: 4rem;

  & ${Text} {
    color: ${({ theme }) => theme.authentication.textColor};
  }
`;

const SignUpLink = styled.a`
  color: ${colors.secondary['01']};

  &:hover {
    text-decoration: underline;
  }
`;

export default AuthHaveAccount;
