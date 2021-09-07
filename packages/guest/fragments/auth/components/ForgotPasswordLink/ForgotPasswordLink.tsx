import Link from 'next/link';

import * as Styled from './styledComponents';

import { Text, TextVariants, TypoTags } from '@todo-liszt/common';
import pathConfig from '@configs/path';

const ForgotPasswordLink = () => {
  return (
    <Styled.Wrapper>
      <Link href={pathConfig.app.forgotPassword}>
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
