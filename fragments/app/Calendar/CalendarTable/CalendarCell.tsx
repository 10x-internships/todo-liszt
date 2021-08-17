import { Td as StyledCalendarCell } from './components';
import { Text, TextVariants, TypoTags } from '@components/Typography';

interface CalendarCellProps {
  isToday?: boolean;
  isDayInMonth?: boolean;
  children?: React.ReactNode;
}

const CalendarCell = ({ isToday, isDayInMonth, children }: CalendarCellProps) => {
  return (
    <StyledCalendarCell isToday={isToday} isDayInMonth={isDayInMonth}>
      <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
        {children}
      </Text>
    </StyledCalendarCell>
  );
};

export default CalendarCell;
