import { Heading, HeadingVariants, TypoTags } from '@components/Typography';
import * as Styled from './components';

interface SettingsCardProps {
  title: string;
  children?: React.ReactNode;
}

const SettingsCard = ({ title, children, ...others }: SettingsCardProps) => {
  return (
    <Styled.Wrapper {...others}>
      <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
        {title}
      </Heading>
      <Styled.CardContent>{children}</Styled.CardContent>
    </Styled.Wrapper>
  );
};

export default SettingsCard;
