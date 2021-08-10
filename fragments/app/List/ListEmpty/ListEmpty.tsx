import Image from 'next/image';

import { Text, TextVariants, TypoTags } from '@components/Typography';
import { colors } from '@styles/theme';

import * as Styled from './components';
import emptyImg from 'public/assets/images/list-empty.png';

const ListEmpty = () => {
  return (
    <Styled.ListEmpty>
      <Image src={emptyImg} alt="Water color" width={360} height={360} />
      <Text as={TypoTags.P} variant={TextVariants.Body1} isBold>
        Enjoy your day off
      </Text>
    </Styled.ListEmpty>
  );
};

export default ListEmpty;
