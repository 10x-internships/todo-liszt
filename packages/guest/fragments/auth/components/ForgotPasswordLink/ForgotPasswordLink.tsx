import Link from 'next/link';

import * as Styled from './styledComponents';

import { Text, TextVariants, TypoTags } from '@todo-liszt/common';
import routePath from '@config/pathName';

const ForgotPasswordLink = () => {
  return (
    <Styled.Wrapper>
      <Link href={routePath.forgotPassword}>
        <a>
          <Text as={TypoTags.Span} variant={TextVariants.Caption1} textCenter>
            Forgot your password?
          </Text>
        </a>
      </Link>
    </Styled.Wrapper>
  );
};

export default ForgotPasswordLink;
