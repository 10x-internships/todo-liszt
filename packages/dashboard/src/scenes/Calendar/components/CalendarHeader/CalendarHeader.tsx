import { Dayjs } from 'dayjs';

import { ArrowLeft, ArrowRight } from '@todo-liszt/common';
import { CircleButton, Text, TextVariants, TypoTags } from '@todo-liszt/common';

import * as Styled from './components';

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
