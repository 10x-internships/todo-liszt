import Link from 'next/link';

import { Text, TextVariants, TypoTags } from '@todo-liszt/common';
import routePath from '@config/pathName';

import * as Styled from './styledComponents';

interface AuthHaveAccountProps {
  noAccount?: boolean;
}

const AuthHaveAccount = ({ noAccount }: AuthHaveAccountProps) => {
  return (
    <Styled.Wrapper>
      {!noAccount && (
        <Text as={TypoTags.P} variant={TextVariants.Caption1} textCenter>
          Have an account?{' '}
          <Link href={routePath.signIn} passHref>
            <a>Sign in Now</a>
          </Link>
        </Text>
      )}

      {noAccount && (
        <Text as={TypoTags.P} variant={TextVariants.Caption1} textCenter>
          {/* eslint-disable */}
          Don't have account?{' '}
          <Link href={routePath.signUp} passHref>
            <a>Sign Up Now</a>
          </Link>
        </Text>
      )}
    </Styled.Wrapper>
  );
};

export default AuthHaveAccount;
