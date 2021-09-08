import { useState } from 'react';
import dayjs from 'dayjs';

import SceneHeader from '@components/SceneHeader';

import CalendarTable from './CalendarTable';
import CalendarHeader from './CalendarHeader';
import { useTranslation } from 'react-i18next';

interface CalendarProps {
  startDayOfWeek: 'sunday' | 'monday';
}

const Calendar = ({ startDayOfWeek }: CalendarProps) => {
  const [dateObj, setDateObj] = useState(dayjs());
  const { t } = useTranslation();

  const firstDateOfMonthObj = dateObj.startOf('month');
  const lastDateOfMonthObj = dateObj.endOf('month');
  let daysOfWeek;
  let startDay: number;
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
    firstDateOfMonthObj.subtract(startDay - i, 'day').toISOString()
  );

  const endWeekDays = Array.from(Array(6 - endDay), (_, i) =>
    lastDateOfMonthObj.add(i + 1, 'day').toISOString()
  );

  const daysInMonth = Array.from(
    Array(dateObj.daysInMonth()),
    (_, i) => `${dateObj.format('YYYY')}-${dateObj.format('MM')}-${i + 1}`
  );

  const prevMonth = () => setDateObj((prevDateObj) => prevDateObj.subtract(1, 'month'));
  const nextMonth = () => setDateObj((prevDateObj) => prevDateObj.add(1, 'month'));

  return (
    <>
      <SceneHeader title={t('scene.Calendar.title')} />

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
