import { Text, TextVariants, TypoTags } from '@components/Typography';
import * as Styled from './components';
import { v4 as uuidv4 } from 'uuid';

export const tasksData = [
  {
    id: uuidv4(),
    name: 'Test 1',
    startDate: '2021-08-20',
    startTime: '10:00',
    endDate: '2021-08-22',
    endTime: '21:00',
  },
];

interface CalendarTaskProps {
  color?: string;
  children?: React.ReactNode;
}

const CalendarTask = ({ color, children }: CalendarTaskProps) => {
  return (
    <Styled.CalendarTask color={color}>
      <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
        {children}
      </Text>
    </Styled.CalendarTask>
  );
};

export default CalendarTask;
