import { selectWeekStart } from '@redux/selectors/settings';
import { useSelector } from 'react-redux';
import Calendar from '../../components/Calendar';

const CalendarContainer = () => {
  const startDayOfWeek = useSelector(selectWeekStart);

  return <Calendar startDayOfWeek={startDayOfWeek} />;
};

export default CalendarContainer;
