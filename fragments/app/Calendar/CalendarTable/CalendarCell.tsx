import { Td as StyledCalendarCell, CalendarContent } from './components';
import { Text, TextVariants, TypoTags } from '@components/Typography';

interface CalendarCellProps {
  isToday?: boolean;
  isDayInMonth?: boolean;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

const CalendarCell = ({ isToday, isDayInMonth, content, children }: CalendarCellProps) => {
  return (
    <StyledCalendarCell isToday={isToday} isDayInMonth={isDayInMonth}>
      <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
        {children}
      </Text>
      <CalendarContent>{content}</CalendarContent>
    </StyledCalendarCell>
  );
};

export default CalendarCell;
