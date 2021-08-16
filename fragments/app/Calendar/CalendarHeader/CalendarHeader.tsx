import CircleButton from '@components/CircleButton';
import { ArrowLeft, ArrowRight } from '@components/Icons';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import * as Styled from './components';
import { Dayjs } from 'dayjs';
interface CalendarHeaderProps {
  dateObj: Dayjs;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader = ({ dateObj, onNextMonth, onPrevMonth }: CalendarHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Text as={TypoTags.H2} variant={TextVariants.Hairline1}>
        {dateObj.format('MMMM')} {dateObj.year()}
      </Text>
      <Styled.ButtonsWrapper>
        <CircleButton icon={<ArrowLeft />} onClick={onPrevMonth} />
        <CircleButton icon={<ArrowRight />} onClick={onNextMonth} />
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};

export default CalendarHeader;
