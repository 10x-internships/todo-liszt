import styled from '@emotion/styled';

import { Logo } from '@todo-liszt/common';
import { colors, Text, TextVariants, TypoTags } from '@todo-liszt/common';

const StyledAuthLogo = styled.div`
  text-align: center;

  & svg {
    display: block;
    width: 5rem;
    height: 5rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0.75rem;
  }
`;

const AuthLogo = () => {
  return (
    <StyledAuthLogo>
      <Logo />
      <Text as={TypoTags.Span} variant={TextVariants.Body1} css={{ color: colors.primary['01'] }}>
        TodoLiszt
      </Text>
    </StyledAuthLogo>
  );
};

export default AuthLogo;
