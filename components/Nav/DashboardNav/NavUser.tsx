import styled from '@emotion/styled';

import Avatar from '@components/Avatar';
import { Text, TextVariants, TypoTags } from '@components/Typography';

interface NavUserProps {
  avatarSrc: string | StaticImageData;
  avatarAlt: string;
  username?: string;
}

const NavUser = ({ avatarSrc, avatarAlt, username }: NavUserProps) => {
  return (
    <NavUserWrapper>
      <Avatar src={avatarSrc as any} alt={avatarAlt} width={36} height={36} />
      <Text as={TypoTags.Span} variant={TextVariants.Button2}>
        {username}
      </Text>
    </NavUserWrapper>
  );
};

const NavUserWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  ${Text} {
    margin-left: 1rem;
  }
`;

export default NavUser;
