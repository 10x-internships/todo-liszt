import Link from 'next/link';

import { Button, ButtonVariants, ButtonSizes } from '@components/Button';
import SearchBox from '@components/SearchBox';
import { Heading, HeadingVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';

interface ListHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const ListHeader = ({ title, children }: ListHeaderProps) => {
  return (
    <Styled.ListHeader>
      <Heading as={TypoTags.H1} variant={HeadingVariants.Headline2}>
        {title}
      </Heading>

      <Styled.ListHeaderContent>{children}</Styled.ListHeaderContent>
    </Styled.ListHeader>
  );
};

export default ListHeader;
