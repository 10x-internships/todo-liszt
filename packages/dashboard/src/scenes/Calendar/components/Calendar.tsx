import { useState } from 'react';
import dayjs from 'dayjs';

import SceneHeader from '@components/SceneHeader';

import CalendarTable from './CalendarTable';
import CalendarHeader from './CalendarHeader';
import { useTranslation } from 'react-i18next';

interface CalendarProps {
  startDayOfWeek:
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';
}

const Calendar = ({ startDayOfWeek }: CalendarProps) => {
  const [dateObj, setDateObj] = useState(dayjs());
  const { t } = useTranslation();

  const firstDateOfMonthObj = dateObj.startOf('month');
  const lastDateOfMonthObj = dateObj.endOf('month');

  let daysOfWeek: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let startDay = firstDateOfMonthObj.day();
  let endDay = lastDateOfMonthObj.day();

  if (startDayOfWeek === 'monday') {
    daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    startDay = firstDateOfMonthObj.day() === 0 ? 6 : firstDateOfMonthObj.day() - 1;
    endDay = lastDateOfMonthObj.day() - 1;
  }

  if (startDayOfWeek === 'tuesday') {
    daysOfWeek = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'];
    if (firstDateOfMonthObj.day() === 0) {
      startDay = 5;
    } else if (firstDateOfMonthObj.day() === 1) {
      startDay = 6;
    } else {
      startDay = firstDateOfMonthObj.day() - 2;
    }
    endDay = lastDateOfMonthObj.day() - 2;
  }

  if (startDayOfWeek === 'wednesday') {
    daysOfWeek = ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'];
    if (firstDateOfMonthObj.day() === 0) {
      startDay = 4;
    } else if (firstDateOfMonthObj.day() === 1) {
      startDay = 5;
    } else if (firstDateOfMonthObj.day() === 2) {
      startDay = 6;
    } else {
      startDay = firstDateOfMonthObj.day() - 3;
    }
    endDay = lastDateOfMonthObj.day() - 3;
  }

  if (startDayOfWeek === 'thursday') {
    daysOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    if (firstDateOfMonthObj.day() === 0) {
      startDay = 3;
    } else if (firstDateOfMonthObj.day() === 1) {
      startDay = 4;
    } else if (firstDateOfMonthObj.day() === 2) {
      startDay = 5;
    } else if (firstDateOfMonthObj.day() === 3) {
      startDay = 6;
    } else {
      startDay = firstDateOfMonthObj.day() - 4;
    }
    endDay = lastDateOfMonthObj.day() - 4;
  }

  if (startDayOfWeek === 'friday') {
    daysOfWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    if (firstDateOfMonthObj.day() === 0) {
      startDay = 2;
    } else if (firstDateOfMonthObj.day() === 1) {
      startDay = 3;
    } else if (firstDateOfMonthObj.day() === 2) {
      startDay = 4;
    } else if (firstDateOfMonthObj.day() === 3) {
      startDay = 5;
    } else if (firstDateOfMonthObj.day() === 4) {
      startDay = 6;
    } else {
      startDay = firstDateOfMonthObj.day() - 5;
    }
    endDay = lastDateOfMonthObj.day() - 5;
  }

  if (startDayOfWeek === 'saturday') {
    daysOfWeek = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
    if (firstDateOfMonthObj.day() === 0) {
      startDay = 1;
    } else if (firstDateOfMonthObj.day() === 1) {
      startDay = 2;
    } else if (firstDateOfMonthObj.day() === 2) {
      startDay = 3;
    } else if (firstDateOfMonthObj.day() === 3) {
      startDay = 4;
    } else if (firstDateOfMonthObj.day() === 4) {
      startDay = 5;
    } else if (firstDateOfMonthObj.day() === 5) {
      startDay = 6;
    } else {
      startDay = firstDateOfMonthObj.day() - 6;
    }
    endDay = lastDateOfMonthObj.day() - 6;
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
