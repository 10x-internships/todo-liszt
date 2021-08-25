import ListItem from "./ListItem";

import { itemDataTypes } from "../listItemTestData";

interface ListListingProps {
  items: itemDataTypes[];
}

const ListListing = ({ items }: ListListingProps) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListListing;
