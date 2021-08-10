import { useState } from 'react';

import * as Styled from './components';
import Dropdown from '@components/Dropdown';
import { Text, TextVariants, TypoTags } from '@components/Typography';

const filterOptions = [
  { id: 0, name: 'All', value: '' },
  { id: 1, name: 'Black', value: 'black' },
  { id: 2, name: 'Green', value: 'green' },
  { id: 3, name: 'Pink', value: 'pink' },
  { id: 4, name: 'Purple', value: 'purple' },
];

const ListFilter = () => {
  const [selected, setSelected] = useState<string>(filterOptions[0].name);

  return (
    <Styled.ListFilter>
      <Text as={TypoTags.Span} variant={TextVariants.Caption2} isBold>
        Type
      </Text>
      <Dropdown options={filterOptions} selected={selected} setSelected={setSelected} />
    </Styled.ListFilter>
  );
};

export default ListFilter;
