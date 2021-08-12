import { useState } from 'react';

import * as Styled from './components';
import Dropdown from '@components/Dropdown';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import colorOptions from '../colorOptions';

const filterOptions = [{ id: 0, name: 'All', value: '' }, ...colorOptions.slice(1)];

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
