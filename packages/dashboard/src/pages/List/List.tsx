import { Link } from "react-router-dom";

import { SearchBox, Button, ButtonSizes } from "@todo-liszt/common";

import {
  ListHeader,
  ListEmpty,
  ListWrapper,
  ListListing,
  ListFilter,
  ListPagination,
} from "../../fragments/listpage";

const List = () => {
  return (
    <>
      <ListHeader title="List">
        <form>
          <SearchBox placeholder="Search everything" />
        </form>
        <Link to="/app/list/create">
          <Button size={ButtonSizes.Medium}>Create</Button>
        </Link>
      </ListHeader>
      <ListFilter />
      <ListWrapper isEmpty={false}>
        {/* <ListEmpty /> */}
        <ListListing />
      </ListWrapper>
      <ListPagination total={50} />
    </>
  );
};

export default List;
