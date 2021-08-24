import { Link } from "react-router-dom";

import { SearchBox, Button, ButtonSizes } from "@todo-liszt/common";

import {
  ListWrapper,
  ListListing,
  ListFilter,
  ListPagination,
} from "../../fragments/list-page";

import PageHeader from "../components/PageHeader";

const List = () => {
  return (
    <>
      <PageHeader title="List">
        <form>
          <SearchBox placeholder="Search everything" />
        </form>
        <Link to="/app/list/create">
          <Button size={ButtonSizes.Medium}>Create</Button>
        </Link>
      </PageHeader>

      <ListFilter />

      <ListWrapper isEmpty={false}>
        <ListListing />
      </ListWrapper>
      <ListPagination total={50} />
    </>
  );
};

export default List;
