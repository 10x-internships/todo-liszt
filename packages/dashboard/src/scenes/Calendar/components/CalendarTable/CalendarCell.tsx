import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

import { Text, TextVariants, TypoTags } from "@todo-liszt/common";

import { Td as StyledCalendarCell, CalendarContent } from "./components";

dayjs.extend(isToday);

interface CalendarCellProps {
  dateData?: string;
  isDayInMonth?: boolean;
  children?: React.ReactNode;
}

const CalendarCell = ({
  isDayInMonth,
  dateData,
  children,
}: CalendarCellProps) => {
  return (
    <StyledCalendarCell
      isToday={dayjs(dateData).isToday()}
      isDayInMonth={isDayInMonth}
    >
      <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
        {dayjs(dateData).date()}
      </Text>
      <CalendarContent>{children}</CalendarContent>
    </StyledCalendarCell>
  );
};

export default CalendarCell;
