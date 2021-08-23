import { useRouter } from 'next/router';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';
interface CalendarTaskProps {
  taskId?: string;
  taskColor?: string;
  children?: React.ReactNode;
}

const CalendarTask = ({ taskColor, taskId, children }: CalendarTaskProps) => {
  const router = useRouter();

  return (
    <Styled.CalendarTask taskColor={taskColor} onClick={() => router.push(`/app/list/${taskId}`)}>
      <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
        {children}
      </Text>
    </Styled.CalendarTask>
  );
};

export default CalendarTask;
