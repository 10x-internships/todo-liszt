import { Text, TextVariants, TypoTags } from '@todo-liszt/common';
import { useTranslation } from 'react-i18next';

import * as Styled from './components';

const ListEmpty = () => {
  const { t } = useTranslation();

  return (
    <Styled.ListEmpty>
      <img src="/assets/images/list-empty.png" alt="Water color" width={360} height={360} />
      <Text as={TypoTags.P} variant={TextVariants.Body1} isBold>
        {t('scene.Lists.ListEmpty.text')}
      </Text>
    </Styled.ListEmpty>
  );
};

export default ListEmpty;
