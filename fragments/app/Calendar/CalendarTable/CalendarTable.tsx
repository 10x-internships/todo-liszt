import { Dayjs } from 'dayjs';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';
import { colors } from '@styles/theme';

interface CalendarTableProps {
  dateObj: Dayjs;
  totalDays?: number[];
  startWeekDays: number[];
  endWeekDays: number[];
  daysInMonth: number[];
}

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const CalendarTable = ({
  dateObj,
  startWeekDays,
  endWeekDays,
  daysInMonth,
}: CalendarTableProps) => {
  const totalDays = [...startWeekDays, ...daysInMonth, ...endWeekDays];

  const totalRows = totalDays.reduce((acc: any, day, i) => {
    if (i % 7 !== 0) {
      acc[acc.length - 1].push(day);
    } else {
      acc.push([]);
      acc[acc.length - 1].push(day);
    }

    return acc;
  }, []);

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
          {totalRows.map((row: any, i: any) => (
            <tr key={i}>
              {row.map((day: number, i: number) => (
                <td
                  key={i}
                  css={{ color: dateObj.date() === day ? colors.primary['01'] : 'inherit' }}
                >
                  <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
                    {day}
                  </Text>
                </td>
              ))}
            </tr>
          ))}
        </Styled.Tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default CalendarTable;
