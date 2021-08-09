import { Button, ButtonVariants, ButtonSizes } from '@components/Button';
import SearchBox from '@components/SearchBox';
import { Heading, HeadingVariants, TypoTags } from '@components/Typography';

import * as Styled from './components';

const ListHeader = () => {
  return (
    <Styled.ListHeader>
      <Heading as={TypoTags.H1} variant={HeadingVariants.Headline2}>
        Lists
      </Heading>

      <Styled.ListSearchForm>
        <SearchBox placeholder="Search everything" />
        <Button size={ButtonSizes.Medium}>New List</Button>
      </Styled.ListSearchForm>
    </Styled.ListHeader>
  );
};

export default ListHeader;
