import { useState } from 'react';
import dayjs from 'dayjs';

import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

interface CalendarProps {
  startDayOfWeek: 'sunday' | 'monday';
}

const Calendar = ({ startDayOfWeek }: CalendarProps) => {
  const [dateObj, setDateObj] = useState(dayjs());
  let daysOfWeek;

  const firstDateOfMonthObj = dateObj.startOf('month');
  let startDay: number;
  const lastDateOfMonthObj = dateObj.endOf('month');
  let endDay: number;

  if (startDayOfWeek === 'monday') {
    daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    startDay = firstDateOfMonthObj.day() === 0 ? 6 : firstDateOfMonthObj.day() - 1;
    endDay = lastDateOfMonthObj.day() - 1;
  } else {
    daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    startDay = firstDateOfMonthObj.day();
    endDay = lastDateOfMonthObj.day();
  }

  const startWeekDays = Array.from(Array(startDay), (_, i) =>
    firstDateOfMonthObj.subtract(startDay - i, 'day').date()
  );

  const endWeekDays = Array.from(Array(6 - endDay), (_, i) =>
    lastDateOfMonthObj.add(i + 1, 'day').date()
  );

  const daysInMonth = Array.from(Array(dateObj.daysInMonth()), (_, i) => i + 1);

  const prevMonth = () => setDateObj((prevDateObj) => prevDateObj.subtract(1, 'month'));
  const nextMonth = () => setDateObj((prevDateObj) => prevDateObj.add(1, 'month'));

  return (
    <>
      <CalendarHeader dateObj={dateObj} onNextMonth={nextMonth} onPrevMonth={prevMonth} />
      <CalendarTable
        dateObj={dateObj}
        daysOfWeek={daysOfWeek}
        startWeekDays={startWeekDays}
        endWeekDays={endWeekDays}
        daysInMonth={daysInMonth}
      />
    </>
  );
};

export default Calendar;
