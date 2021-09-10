import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { selectTimezone } from '@redux/selectors/settings';
import { Text, TextVariants, TypoTags } from '@todo-liszt/common';

import * as Styled from './components';

interface ListItemContentProps {
  schedule?: { startDate: string; endDate: string };
  color?: string;
  task?: string;
}

const ListItemContent = ({ schedule, color, task }: ListItemContentProps) => {
  const timezone = useSelector(selectTimezone);

  return (
    <Styled.ListItemContent>
      <Styled.ItemTextWrapper>
        <Styled.ItemColor color={color!} />
        <Text as={TypoTags.Span} variant={TextVariants.Body2}>
          {task}
        </Text>
      </Styled.ItemTextWrapper>

      {schedule && (
        <Styled.ItemSchedule>
          <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
            {dayjs(schedule.startDate).tz(timezone).format('MMMM DD, YYYY')} -{' '}
            {dayjs(schedule.endDate).tz(timezone).format('MMMM DD, YYYY')}
          </Text>
        </Styled.ItemSchedule>
      )}
    </Styled.ListItemContent>
  );
};

export default ListItemContent;
