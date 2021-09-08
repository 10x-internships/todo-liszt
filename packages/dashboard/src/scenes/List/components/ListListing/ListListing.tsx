import { Link } from 'react-router-dom';
import { SearchBox, Button, ButtonSizes } from '@todo-liszt/common';

import pathName from '@configs/path';
import SceneHeader from '@components/SceneHeader';

import ListFilter from '../ListFilter';
import ListPagination from '../ListPagination';

import listItemTestData from './listItemTestData';
import ListEmpty from '../ListEmpty';

import * as Styled from './components';
import ListItem from './ListItem';
import { useTranslation } from 'react-i18next';

const ListListing = () => {
  const isListEmpty = listItemTestData.length === 0;
  const { t, i18n } = useTranslation();

  return (
    <>
      <SceneHeader title={t('scene.Lists.ListListing.title')}>
        <SearchBox placeholder={t('scene.Lists.ListListing.SearchBox.placeholder')} />

        <Link to={pathName.app.listCreate}>
          <Button size={ButtonSizes.Medium}>{t('scene.Lists.ListListing.Button.create')}</Button>
        </Link>
      </SceneHeader>

      {!isListEmpty && <ListFilter />}

      <Styled.ListListingWrapper isEmpty={isListEmpty}>
        {isListEmpty && <ListEmpty />}
        {!isListEmpty && (
          <ul>
            {listItemTestData.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </Styled.ListListingWrapper>

      {!isListEmpty && <ListPagination total={50} />}
    </>
  );
};

export default ListListing;
