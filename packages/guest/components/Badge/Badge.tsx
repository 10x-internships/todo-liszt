import * as Styled from './components';
import { BadgeProps } from './types';
import { Text, TextVariants, TypoTags } from '../../components/Typography';

const Badge = ({ icon, color, children }: BadgeProps) => {
  return (
    <Styled.Badge color={color}>
      <Styled.BadgeIcon>{icon}</Styled.BadgeIcon>
      <Text as={TypoTags.Span} variant={TextVariants.Caption2} isBold>
        {children}
      </Text>
    </Styled.Badge>
  );
};

export default Badge;
