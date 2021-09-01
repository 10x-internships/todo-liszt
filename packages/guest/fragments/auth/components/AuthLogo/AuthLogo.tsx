import * as Styled from './styledComponents';

import { Logo } from '@todo-liszt/common';
import { Text, TextVariants, TypoTags } from '@todo-liszt/common';

const AuthLogo = () => {
  return (
    <Styled.Wrapper>
      <Logo />
      <Text as={TypoTags.Span} variant={TextVariants.Body1}>
        TodoLiszt
      </Text>
    </Styled.Wrapper>
  );
};

export default AuthLogo;
