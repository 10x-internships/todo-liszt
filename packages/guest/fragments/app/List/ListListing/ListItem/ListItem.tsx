import { useState } from 'react';
import { useRouter } from 'next/router';

import Checkbox from '@components/Checkbox';

import { Text, TextVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';
import ListItemContent from '../ListItemContent';
import { itemDataTypes } from '../../listItemTestData';

interface ListItemProps {
  item: itemDataTypes;
}

const ListsItem = ({ item }: ListItemProps) => {
  const router = useRouter();

  const itemDetails = (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.closest('label')) return;
    router.push(`${router.asPath}/${item.id}`);
  };

  return (
    <Styled.ListItem onClick={itemDetails}>
      <Checkbox />
      <ListItemContent {...item} />
      <Styled.SubTasks>
        <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
          {item.subTasks}
        </Text>
      </Styled.SubTasks>
    </Styled.ListItem>
  );
};

export default ListsItem;
