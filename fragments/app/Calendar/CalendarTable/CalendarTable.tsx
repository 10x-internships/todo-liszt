import { useMemo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';
import CalendarCell from './CalendarCell';
import CalendarTask, { tasksData } from '../CalendarTask';

interface CalendarTableProps {
  dateObj: Dayjs;
  daysOfWeek: string[];
  startWeekDays: string[];
  endWeekDays: string[];
  daysInMonth: string[];
}

const CalendarTable = ({
  dateObj,
  daysOfWeek,
  startWeekDays,
  endWeekDays,
  daysInMonth,
}: CalendarTableProps) => {
  const totalDays = useMemo(() => {
    const startWeekDaysEl = startWeekDays.map((day) => (
      <CalendarCell key={uuidv4()} dateData={day} />
    ));

    const endWeekDaysEl = endWeekDays.map((day) => <CalendarCell key={uuidv4()} dateData={day} />);

    const renderTasks = (dayInMonth: string) => {
      return tasksData.map((data) => {
        const startDate = dayjs(data.startDate);
        const endDate = dayjs(data.endDate);

        const diffDays = endDate.diff(startDate, 'day') + 1;
        const daysArr = Array.from(Array(diffDays), (_, i) => endDate.subtract(i, 'day'));
        const tasksEl = daysArr
          .filter((day) => dayjs(dayInMonth).isSame(day))
          .map(() => (
            <CalendarTask key={data.id} taskId={data.id} taskColor={data.color}>
              {data.name}
            </CalendarTask>
          ));
        return tasksEl[0];
      });
    };

    const daysInMonthEl = daysInMonth.map((day) => (
      <CalendarCell key={uuidv4()} isDayInMonth dateData={day}>
        {renderTasks(day)}
      </CalendarCell>
    ));

    return [...startWeekDaysEl, ...daysInMonthEl, ...endWeekDaysEl];
  }, [startWeekDays, daysInMonth, endWeekDays]);

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
