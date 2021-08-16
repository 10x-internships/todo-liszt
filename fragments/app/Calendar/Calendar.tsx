import { useState } from 'react';
import dayjs from 'dayjs';

import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

const Calendar = () => {
  const [dateObj, setDateObj] = useState(dayjs());

  const firstDateOfMonthObj = dateObj.startOf('month');
  const startDay = firstDateOfMonthObj.day(); // Sunday is 0
  const lastDateOfMonthObj = dateObj.endOf('month');
  const endDay = lastDateOfMonthObj.day();

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
        startWeekDays={startWeekDays}
        endWeekDays={endWeekDays}
        daysInMonth={daysInMonth}
      />
    </>
  );
};

export default Calendar;
