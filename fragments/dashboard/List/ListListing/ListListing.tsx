import ListItem from './ListItem';

import listItemTestData from '../listItemTestData';

const ListListing = () => {
  return (
    <ul>
      {listItemTestData.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListListing;
