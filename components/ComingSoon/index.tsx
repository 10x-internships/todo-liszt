import styled from '@emotion/styled';
import Image from 'next/image';

import { Heading, HeadingVariants, TypoTags } from '@components/Typography';
import { colors } from '@styles/theme';

const StyledComingSoon = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);

  & ${Heading} {
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${colors.neutrals['08']};
    text-shadow: 0px 8px 16px rgba(15, 15, 15, 0.2);
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const ComingSoon = () => {
  return (
    <StyledComingSoon>
      <Image
        alt="Coming soon"
        src="/assets/images/coming-soon.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <Heading as={TypoTags.H1} variant={HeadingVariants.Hero}>
        Coming soon
      </Heading>
    </StyledComingSoon>
  );
};

export default ComingSoon;
