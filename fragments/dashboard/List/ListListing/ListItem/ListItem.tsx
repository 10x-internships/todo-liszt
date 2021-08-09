import Checkbox from '@components/Checkbox';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';
import ListItemContent from '../ListItemContent';
import { itemDataTypes } from '../../listItemTestData';

interface ListItemProps {
  item: itemDataTypes;
}

const ListsItem = ({ item }: ListItemProps) => {
  return (
    <Styled.ListItem>
      <Checkbox />
      {/* ItemContent */}
      <ListItemContent {...item} />
      {/* Item subTasks */}
      <Styled.SubTasks>
        <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
          {item.subTasks}
        </Text>
      </Styled.SubTasks>
    </Styled.ListItem>
  );
};

export default ListsItem;
