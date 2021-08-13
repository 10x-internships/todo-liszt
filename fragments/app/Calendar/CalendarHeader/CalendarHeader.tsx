import CircleButton from '@components/CircleButton';
import { ArrowLeft, ArrowRight } from '@components/Icons';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import * as Styled from './components';

const CalendarHeader = () => {
  return (
    <Styled.Wrapper>
      <Text as={TypoTags.H2} variant={TextVariants.Hairline1}>
        August 2021
      </Text>
      <Styled.ButtonsWrapper>
        <CircleButton icon={<ArrowLeft />} />
        <CircleButton icon={<ArrowRight />} />
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};

export default CalendarHeader;
