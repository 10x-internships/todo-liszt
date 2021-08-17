import { useMemo } from 'react';
import { Dayjs } from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';
import CalendarCell from './CalendarCell';

interface CalendarTableProps {
  dateObj: Dayjs;
  daysOfWeek: string[];
  startWeekDays: number[];
  endWeekDays: number[];
  daysInMonth: number[];
}

const CalendarTable = ({
  dateObj,
  daysOfWeek,
  startWeekDays,
  endWeekDays,
  daysInMonth,
}: CalendarTableProps) => {
  const startWeekDaysEl = startWeekDays.map((day) => (
    <CalendarCell key={uuidv4()}>{day}</CalendarCell>
  ));

  const daysInMonthEl = daysInMonth.map((day) => (
    <CalendarCell
      key={uuidv4()}
      isDayInMonth
      isToday={day === dateObj.date() && new Date().getMonth() === dateObj.month()}
    >
      {day}
    </CalendarCell>
  ));

  const endWeekDaysEl = endWeekDays.map((day) => <CalendarCell key={uuidv4()}>{day}</CalendarCell>);

  const totalDays = useMemo(
    () => [...startWeekDaysEl, ...daysInMonthEl, ...endWeekDaysEl],
    [startWeekDaysEl, daysInMonthEl, endWeekDaysEl]
  );

  const totalRows = useMemo(
    () =>
      totalDays.reduce((acc: any[], day, i) => {
        if (i % 7 !== 0) {
          acc[acc.length - 1].push(day);
        } else {
          acc.push([]);
          acc[acc.length - 1].push(day);
        }

        return acc;
      }, []),
    [totalDays]
  );

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.Thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th key={i}>
                <Text as={TypoTags.Span} variant={TextVariants.Hairline1}>
                  {day}
                </Text>
              </th>
            ))}
          </tr>
        </Styled.Thead>

        <Styled.Tbody>
          {totalRows.map((row: number[], i: number) => (
            <tr key={i}>{row}</tr>
          ))}
        </Styled.Tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default CalendarTable;
