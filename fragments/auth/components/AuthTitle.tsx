import { Heading, HeadingVariants, TypoTags } from '@components/Typography';
import styled from '@emotion/styled';

const StyledAuthTitle = styled(Heading)`
  margin-top: 1.75rem;
  margin-bottom: 3rem;
`;

const AuthTitle: React.FC = ({ children }) => {
  return (
    <StyledAuthTitle as={TypoTags.H1} variant={HeadingVariants.Headline1} textCenter>
      {children}
    </StyledAuthTitle>
  );
};

export default AuthTitle;
